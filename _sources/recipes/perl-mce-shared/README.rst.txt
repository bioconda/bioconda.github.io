:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mce-shared'
.. highlight: bash

perl-mce-shared
===============

.. conda:recipe:: perl-mce-shared
   :replaces_section_title:
   :noindex:

   MCE extension for sharing data supporting threads and processes

   :homepage: https://github.com/marioroy/mce-shared
   :license: perl_5
   :recipe: /`perl-mce-shared <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce-shared>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce-shared/meta.yaml>`_

   


.. conda:package:: perl-mce-shared

   |downloads_perl-mce-shared| |docker_perl-mce-shared|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.893-0</code>,  <code>1.892-0</code>,  <code>1.891-0</code>,  <code>1.890-0</code>,  <code>1.889-0</code>,  <code>1.888-0</code>,  <code>1.840-1</code>,  <code>1.840-0</code>,  <code>1.839-0</code>,  </span></summary>
      

      ``1.893-0``,  ``1.892-0``,  ``1.891-0``,  ``1.890-0``,  ``1.889-0``,  ``1.888-0``,  ``1.840-1``,  ``1.840-0``,  ``1.839-0``,  ``1.838-0``,  ``1.836-1``,  ``1.836-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-base: 
   :depends on perl-carp: 
   :depends on perl-constant: 
   :depends on perl-mce: ``>=1.874``
   :depends on perl-socket: 
   :depends on perl-storable: 
   :depends on perl-time-hires: 

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

    pixi global install perl-mce-shared

to add into an existing workspace instead, run::

    pixi add perl-mce-shared

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-mce-shared

Alternatively, to install into a new environment, run::

    conda create -n envname perl-mce-shared

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-mce-shared:<tag>

(see `perl-mce-shared/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-mce-shared| image:: https://img.shields.io/conda/dn/bioconda/perl-mce-shared.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mce-shared
   :alt:   (downloads)
.. |docker_perl-mce-shared| image:: https://quay.io/repository/biocontainers/perl-mce-shared/status
   :target: https://quay.io/repository/biocontainers/perl-mce-shared
.. _`perl-mce-shared/tags`: https://quay.io/repository/biocontainers/perl-mce-shared?tab=tags


.. raw:: html

    <script>
        var package = "perl-mce-shared";
        var versions = ["1.893","1.892","1.891","1.890","1.889"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mce-shared/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mce-shared/README.html