:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-params-validate'
.. highlight: bash

perl-params-validate
====================

.. conda:recipe:: perl-params-validate
   :replaces_section_title:
   :noindex:

   Validate method\/function parameters

   :homepage: http://metacpan.org/pod/Params-Validate
   :license: artistic_2
   :recipe: /`perl-params-validate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-validate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-validate/meta.yaml>`_

   


.. conda:package:: perl-params-validate

   |downloads_perl-params-validate| |docker_perl-params-validate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.31-5</code>,  <code>1.31-4</code>,  <code>1.31-3</code>,  <code>1.31-2</code>,  <code>1.31-1</code>,  <code>1.31-0</code>,  <code>1.30-1</code>,  <code>1.30-0</code>,  <code>1.29-3</code>,  </span></summary>
      

      ``1.31-5``,  ``1.31-4``,  ``1.31-3``,  ``1.31-2``,  ``1.31-1``,  ``1.31-0``,  ``1.30-1``,  ``1.30-0``,  ``1.29-3``,  ``1.29-1``,  ``1.29-0``,  ``1.26-1``,  ``1.26-0``,  ``1.08-2``,  ``1.08-1``,  ``1.08-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-exporter: 
   :depends on perl-module-build: ``0.4234.*``
   :depends on perl-module-implementation: ``0.09.*``
   :depends on perl-test-fatal: ``0.016.*``

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

    pixi global install perl-params-validate

to add into an existing workspace instead, run::

    pixi add perl-params-validate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-params-validate

Alternatively, to install into a new environment, run::

    conda create -n envname perl-params-validate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-params-validate:<tag>

(see `perl-params-validate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-params-validate| image:: https://img.shields.io/conda/dn/bioconda/perl-params-validate.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-params-validate
   :alt:   (downloads)
.. |docker_perl-params-validate| image:: https://quay.io/repository/biocontainers/perl-params-validate/status
   :target: https://quay.io/repository/biocontainers/perl-params-validate
.. _`perl-params-validate/tags`: https://quay.io/repository/biocontainers/perl-params-validate?tab=tags


.. raw:: html

    <script>
        var package = "perl-params-validate";
        var versions = ["1.31","1.31","1.31","1.31","1.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-params-validate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-params-validate/README.html