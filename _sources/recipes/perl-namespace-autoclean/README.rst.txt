:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-namespace-autoclean'
.. highlight: bash

perl-namespace-autoclean
========================

.. conda:recipe:: perl-namespace-autoclean
   :replaces_section_title:
   :noindex:

   Keep imports out of your namespace

   :homepage: https://github.com/moose/namespace-autoclean
   :license: perl_5
   :recipe: /`perl-namespace-autoclean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-namespace-autoclean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-namespace-autoclean/meta.yaml>`_

   


.. conda:package:: perl-namespace-autoclean

   |downloads_perl-namespace-autoclean| |docker_perl-namespace-autoclean|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.31-2</code>,  <code>0.31-1</code>,  <code>0.31-0</code>,  <code>0.29-2</code>,  <code>0.29-1</code>,  <code>0.29-0</code>,  <code>0.28-4</code>,  <code>0.28-3</code>,  <code>0.28-2</code>,  </span></summary>
      

      ``0.31-2``,  ``0.31-1``,  ``0.31-0``,  ``0.29-2``,  ``0.29-1``,  ``0.29-0``,  ``0.28-4``,  ``0.28-3``,  ``0.28-2``,  ``0.28-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-b-hooks-endofscope: ``0.28.*``
   :depends on perl-namespace-clean: ``0.27.*``
   :depends on perl-sub-identify: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install perl-namespace-autoclean

to add into an existing workspace instead, run::

    pixi add perl-namespace-autoclean

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-namespace-autoclean

Alternatively, to install into a new environment, run::

    conda create -n envname perl-namespace-autoclean

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-namespace-autoclean:<tag>

(see `perl-namespace-autoclean/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-namespace-autoclean| image:: https://img.shields.io/conda/dn/bioconda/perl-namespace-autoclean.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-namespace-autoclean
   :alt:   (downloads)
.. |docker_perl-namespace-autoclean| image:: https://quay.io/repository/biocontainers/perl-namespace-autoclean/status
   :target: https://quay.io/repository/biocontainers/perl-namespace-autoclean
.. _`perl-namespace-autoclean/tags`: https://quay.io/repository/biocontainers/perl-namespace-autoclean?tab=tags


.. raw:: html

    <script>
        var package = "perl-namespace-autoclean";
        var versions = ["0.31","0.31","0.31","0.29","0.29"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-namespace-autoclean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-namespace-autoclean/README.html