:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnacauldron'
.. highlight: bash

dnacauldron
===========

.. conda:recipe:: dnacauldron
   :replaces_section_title:
   :noindex:

   Cloning simulation for DNA assembly \(Golden Gate\, Gibson...\).

   :homepage: https://github.com/Edinburgh-Genome-Foundry/DnaCauldron
   :license: MIT
   :recipe: /`dnacauldron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnacauldron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnacauldron/meta.yaml>`_

   


.. conda:package:: dnacauldron

   |downloads_dnacauldron| |docker_dnacauldron|

   :versions:
      
      

      ``2.0.12-0``,  ``2.0.11-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.7-0``

      

   
   :depends on biopython: 
   :depends on dna_features_viewer: 
   :depends on flametree: 
   :depends on fuzzywuzzy: 
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on proglog: 
   :depends on python: 
   :depends on python-levenshtein: 
   :depends on scipy: 
   :depends on snapgene-reader: 
   :depends on xlrd: 
   :depends on xlwt: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install dnacauldron

to add into an existing workspace instead, run::

    pixi add dnacauldron

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dnacauldron

Alternatively, to install into a new environment, run::

    conda create -n envname dnacauldron

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dnacauldron:<tag>

(see `dnacauldron/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dnacauldron| image:: https://img.shields.io/conda/dn/bioconda/dnacauldron.svg?style=flat
   :target: https://anaconda.org/bioconda/dnacauldron
   :alt:   (downloads)
.. |docker_dnacauldron| image:: https://quay.io/repository/biocontainers/dnacauldron/status
   :target: https://quay.io/repository/biocontainers/dnacauldron
.. _`dnacauldron/tags`: https://quay.io/repository/biocontainers/dnacauldron?tab=tags


.. raw:: html

    <script>
        var package = "dnacauldron";
        var versions = ["2.0.12","2.0.11","2.0.9","2.0.8","2.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnacauldron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnacauldron/README.html