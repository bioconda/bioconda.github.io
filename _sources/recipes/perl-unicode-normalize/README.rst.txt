:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-unicode-normalize'
.. highlight: bash

perl-unicode-normalize
======================

.. conda:recipe:: perl-unicode-normalize
   :replaces_section_title:
   :noindex:

   Unicode Normalization Forms

   :homepage: http://metacpan.org/pod/Unicode::Normalize
   :license: perl_5
   :recipe: /`perl-unicode-normalize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-normalize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-normalize/meta.yaml>`_

   


.. conda:package:: perl-unicode-normalize

   |downloads_perl-unicode-normalize| |docker_perl-unicode-normalize|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26-7</code>,  <code>1.26-6</code>,  <code>1.26-5</code>,  <code>1.26-4</code>,  <code>1.26-3</code>,  <code>1.26-2</code>,  <code>1.26-1</code>,  <code>1.26-0</code>,  <code>1.25-0</code>,  </span></summary>
      

      ``1.26-7``,  ``1.26-6``,  ``1.26-5``,  ``1.26-4``,  ``1.26-3``,  ``1.26-2``,  ``1.26-1``,  ``1.26-0``,  ``1.25-0``,  ``1.18-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-constant: 
   :depends on perl-exporter: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install perl-unicode-normalize

to add into an existing workspace instead, run::

    pixi add perl-unicode-normalize

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-unicode-normalize

Alternatively, to install into a new environment, run::

    conda create -n envname perl-unicode-normalize

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-unicode-normalize:<tag>

(see `perl-unicode-normalize/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-unicode-normalize| image:: https://img.shields.io/conda/dn/bioconda/perl-unicode-normalize.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-unicode-normalize
   :alt:   (downloads)
.. |docker_perl-unicode-normalize| image:: https://quay.io/repository/biocontainers/perl-unicode-normalize/status
   :target: https://quay.io/repository/biocontainers/perl-unicode-normalize
.. _`perl-unicode-normalize/tags`: https://quay.io/repository/biocontainers/perl-unicode-normalize?tab=tags


.. raw:: html

    <script>
        var package = "perl-unicode-normalize";
        var versions = ["1.26","1.26","1.26","1.26","1.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-unicode-normalize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-unicode-normalize/README.html