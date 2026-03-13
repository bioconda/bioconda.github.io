:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anarci'
.. highlight: bash

anarci
======

.. conda:recipe:: anarci
   :replaces_section_title:
   :noindex:

   ANARCI\: Antibody Numbering and Antigen Receptor ClassIfication

   :homepage: http://opig.stats.ox.ac.uk/webapps/newsabdab/sabpred/anarci/
   :license: BSD / BSD-3-Clause
   :recipe: /`anarci <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anarci>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anarci/meta.yaml>`_

   


.. conda:package:: anarci

   |downloads_anarci| |docker_anarci|

   :versions:
      
      

      ``2024.05.21-0``,  ``2021.02.04-0``,  ``2020.04.23-3``,  ``2020.04.23-2``,  ``2020.04.23-1``,  ``2020.04.23-0``

      

   
   :depends on biopython: 
   :depends on hmmer: ``>=3.3.2``
   :depends on python: 

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

    pixi global install anarci

to add into an existing workspace instead, run::

    pixi add anarci

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install anarci

Alternatively, to install into a new environment, run::

    conda create -n envname anarci

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/anarci:<tag>

(see `anarci/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_anarci| image:: https://img.shields.io/conda/dn/bioconda/anarci.svg?style=flat
   :target: https://anaconda.org/bioconda/anarci
   :alt:   (downloads)
.. |docker_anarci| image:: https://quay.io/repository/biocontainers/anarci/status
   :target: https://quay.io/repository/biocontainers/anarci
.. _`anarci/tags`: https://quay.io/repository/biocontainers/anarci?tab=tags


.. raw:: html

    <script>
        var package = "anarci";
        var versions = ["2024.05.21","2021.02.04","2020.04.23","2020.04.23","2020.04.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anarci/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anarci/README.html