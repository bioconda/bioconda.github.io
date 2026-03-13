:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'interproscan'
.. highlight: bash

interproscan
============

.. conda:recipe:: interproscan
   :replaces_section_title:
   :noindex:

   InterPro integrates together predictive information about proteins function from a number of partner resources

   :homepage: https://github.com/ebi-pf-team/interproscan
   :license: Apache / GPLv3
   :recipe: /`interproscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/interproscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/interproscan/meta.yaml>`_
   :links: biotools: :biotools:`interproscan_ebi`

   


.. conda:package:: interproscan

   |downloads_interproscan| |docker_interproscan|

   :versions:
      
      

      ``5.59_91.0-1``,  ``5.59_91.0-0``,  ``5.55_88.0-1``,  ``5.55_88.0-0``,  ``5.54_87.0-3``,  ``5.54_87.0-2``,  ``5.54_87.0-1``,  ``5.54_87.0-0``,  ``5.52_86.0-0``

      

   
   :depends on blast: ``>=2.12``
   :depends on cath-tools: 
   :depends on emboss: 
   :depends on hmmer: ``>=3``
   :depends on hmmer2: 
   :depends on libgcc-ng: ``>=12``
   :depends on openjdk: ``>=11,<17``
   :depends on perl: ``>=5.08``
   :depends on pftools: 
   :depends on python: ``>=3``
   :depends on sfld: 

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

    pixi global install interproscan

to add into an existing workspace instead, run::

    pixi add interproscan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install interproscan

Alternatively, to install into a new environment, run::

    conda create -n envname interproscan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/interproscan:<tag>

(see `interproscan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_interproscan| image:: https://img.shields.io/conda/dn/bioconda/interproscan.svg?style=flat
   :target: https://anaconda.org/bioconda/interproscan
   :alt:   (downloads)
.. |docker_interproscan| image:: https://quay.io/repository/biocontainers/interproscan/status
   :target: https://quay.io/repository/biocontainers/interproscan
.. _`interproscan/tags`: https://quay.io/repository/biocontainers/interproscan?tab=tags


.. raw:: html

    <script>
        var package = "interproscan";
        var versions = ["5.59_91.0","5.59_91.0","5.55_88.0","5.55_88.0","5.54_87.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/interproscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/interproscan/README.html