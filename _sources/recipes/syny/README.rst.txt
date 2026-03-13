:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'syny'
.. highlight: bash

syny
====

.. conda:recipe:: syny
   :replaces_section_title:
   :noindex:

   Genome collinearity inferences

   :homepage: https://github.com/PombertLab/SYNY
   :license: MIT
   :recipe: /`syny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syny/meta.yaml>`_

   


.. conda:package:: syny

   |downloads_syny| |docker_syny|

   :versions:
      
      

      ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2-0``,  ``1.1b-0``,  ``1.1a-0``

      

   
   :depends on circos: 
   :depends on diamond: ``>=2.1.9``
   :depends on libgd: 
   :depends on mashmap: ``>=3.1.3``
   :depends on matplotlib-base: 
   :depends on minimap2: ``>=2.28``
   :depends on pandas: 
   :depends on perl: ``>=5.32``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-clone: 
   :depends on perl-config-general: 
   :depends on perl-font-ttf: 
   :depends on perl-gd: 
   :depends on perl-getopt-argvfile: 
   :depends on perl-list-moreutils: 
   :depends on perl-math-bezier: 
   :depends on perl-math-round: 
   :depends on perl-math-vecstat: 
   :depends on perl-params-validate: 
   :depends on perl-perlio-gzip: 
   :depends on perl-readonly: 
   :depends on perl-regexp-common: 
   :depends on perl-set-intspan: 
   :depends on perl-statistics-basic: 
   :depends on perl-svg: 
   :depends on perl-text-format: 
   :depends on perl-text-roman: 
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on scipy: 
   :depends on seaborn: 

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

    pixi global install syny

to add into an existing workspace instead, run::

    pixi add syny

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install syny

Alternatively, to install into a new environment, run::

    conda create -n envname syny

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/syny:<tag>

(see `syny/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_syny| image:: https://img.shields.io/conda/dn/bioconda/syny.svg?style=flat
   :target: https://anaconda.org/bioconda/syny
   :alt:   (downloads)
.. |docker_syny| image:: https://quay.io/repository/biocontainers/syny/status
   :target: https://quay.io/repository/biocontainers/syny
.. _`syny/tags`: https://quay.io/repository/biocontainers/syny?tab=tags


.. raw:: html

    <script>
        var package = "syny";
        var versions = ["1.3.2","1.3.1","1.3.0","1.2","1.1b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/syny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/syny/README.html