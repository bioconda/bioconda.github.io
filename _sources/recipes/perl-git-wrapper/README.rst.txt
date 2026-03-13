:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-git-wrapper'
.. highlight: bash

perl-git-wrapper
================

.. conda:recipe:: perl-git-wrapper
   :replaces_section_title:
   :noindex:

   Wrap git\(7\) command\-line interface

   :homepage: http://genehack.github.com/Git-Wrapper/
   :license: perl_5
   :recipe: /`perl-git-wrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-git-wrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-git-wrapper/meta.yaml>`_

   


.. conda:package:: perl-git-wrapper

   |downloads_perl-git-wrapper| |docker_perl-git-wrapper|

   :versions:
      
      

      ``0.048-1``,  ``0.048-0``,  ``0.047-1``,  ``0.047-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-file-chdir: 
   :depends on perl-file-temp: 
   :depends on perl-ipc-cmd: 
   :depends on perl-sort-versions: 

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

    pixi global install perl-git-wrapper

to add into an existing workspace instead, run::

    pixi add perl-git-wrapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-git-wrapper

Alternatively, to install into a new environment, run::

    conda create -n envname perl-git-wrapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-git-wrapper:<tag>

(see `perl-git-wrapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-git-wrapper| image:: https://img.shields.io/conda/dn/bioconda/perl-git-wrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-git-wrapper
   :alt:   (downloads)
.. |docker_perl-git-wrapper| image:: https://quay.io/repository/biocontainers/perl-git-wrapper/status
   :target: https://quay.io/repository/biocontainers/perl-git-wrapper
.. _`perl-git-wrapper/tags`: https://quay.io/repository/biocontainers/perl-git-wrapper?tab=tags


.. raw:: html

    <script>
        var package = "perl-git-wrapper";
        var versions = ["0.048","0.048","0.047","0.047"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-git-wrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-git-wrapper/README.html