:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-util'
.. highlight: bash

perl-file-util
==============

.. conda:recipe:: perl-file-util
   :replaces_section_title:
   :noindex:

   Easy\, versatile\, portable file handling

   :homepage: https://github.com/tommybutler/file-util/wiki
   :license: perl_5
   :recipe: /`perl-file-util <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-util>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-util/meta.yaml>`_

   


.. conda:package:: perl-file-util

   |downloads_perl-file-util| |docker_perl-file-util|

   :versions:
      
      

      ``4.201720-0``,  ``4.161950-4``,  ``4.161950-3``,  ``4.161950-2``,  ``4.161950-1``,  ``4.161950-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-constant: 
   :depends on perl-exporter: 
   :depends on perl-lib: 

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

    pixi global install perl-file-util

to add into an existing workspace instead, run::

    pixi add perl-file-util

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-file-util

Alternatively, to install into a new environment, run::

    conda create -n envname perl-file-util

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-file-util:<tag>

(see `perl-file-util/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-file-util| image:: https://img.shields.io/conda/dn/bioconda/perl-file-util.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-util
   :alt:   (downloads)
.. |docker_perl-file-util| image:: https://quay.io/repository/biocontainers/perl-file-util/status
   :target: https://quay.io/repository/biocontainers/perl-file-util
.. _`perl-file-util/tags`: https://quay.io/repository/biocontainers/perl-file-util?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-util";
        var versions = ["4.201720","4.161950","4.161950","4.161950","4.161950"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-util/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-util/README.html