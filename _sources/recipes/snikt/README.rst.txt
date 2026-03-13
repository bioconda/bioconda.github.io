:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snikt'
.. highlight: bash

snikt
=====

.. conda:recipe:: snikt
   :replaces_section_title:
   :noindex:

   Identify and remove adapter\/systemic contamination in metagenomic sequencing DNA\/RNA data.

   :homepage: https://github.com/piyuranjan/SNIKT
   :license: MIT
   :recipe: /`snikt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snikt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snikt/meta.yaml>`_

   


.. conda:package:: snikt

   |downloads_snikt| |docker_snikt|

   :versions:
      
      

      ``0.5.0-3``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.0-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-docopt: 
   :depends on r-gridextra: 
   :depends on r-lubridate: 
   :depends on r-tidyverse: 
   :depends on seqtk: 

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

    pixi global install snikt

to add into an existing workspace instead, run::

    pixi add snikt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snikt

Alternatively, to install into a new environment, run::

    conda create -n envname snikt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snikt:<tag>

(see `snikt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snikt| image:: https://img.shields.io/conda/dn/bioconda/snikt.svg?style=flat
   :target: https://anaconda.org/bioconda/snikt
   :alt:   (downloads)
.. |docker_snikt| image:: https://quay.io/repository/biocontainers/snikt/status
   :target: https://quay.io/repository/biocontainers/snikt
.. _`snikt/tags`: https://quay.io/repository/biocontainers/snikt?tab=tags


.. raw:: html

    <script>
        var package = "snikt";
        var versions = ["0.5.0","0.5.0","0.5.0","0.5.0","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snikt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snikt/README.html