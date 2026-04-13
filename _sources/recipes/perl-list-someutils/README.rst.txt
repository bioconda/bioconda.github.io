:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-list-someutils'
.. highlight: bash

perl-list-someutils
===================

.. conda:recipe:: perl-list-someutils
   :replaces_section_title:
   :noindex:

   Provide the stuff missing in List\:\:Util

   :homepage: http://metacpan.org/release/List-SomeUtils
   :license: perl_5
   :recipe: /`perl-list-someutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-someutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-someutils/meta.yaml>`_

   


.. conda:package:: perl-list-someutils

   |downloads_perl-list-someutils| |docker_perl-list-someutils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.59-3</code>,  <code>0.59-2</code>,  <code>0.59-1</code>,  <code>0.59-0</code>,  <code>0.58-1</code>,  <code>0.58-0</code>,  <code>0.56-2</code>,  <code>0.56-1</code>,  <code>0.56-0</code>,  </span></summary>
      

      ``0.59-3``,  ``0.59-2``,  ``0.59-1``,  ``0.59-0``,  ``0.58-1``,  ``0.58-0``,  ``0.56-2``,  ``0.56-1``,  ``0.56-0``,  ``0.53-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-exporter: 
   :depends on perl-module-implementation: ``0.09.*``
   :depends on perl-test-leaktrace: ``0.17.*``

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

    pixi global install perl-list-someutils

to add into an existing workspace instead, run::

    pixi add perl-list-someutils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-list-someutils

Alternatively, to install into a new environment, run::

    conda create -n envname perl-list-someutils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-list-someutils:<tag>

(see `perl-list-someutils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-list-someutils| image:: https://img.shields.io/conda/dn/bioconda/perl-list-someutils.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-list-someutils
   :alt:   (downloads)
.. |docker_perl-list-someutils| image:: https://quay.io/repository/biocontainers/perl-list-someutils/status
   :target: https://quay.io/repository/biocontainers/perl-list-someutils
.. _`perl-list-someutils/tags`: https://quay.io/repository/biocontainers/perl-list-someutils?tab=tags


.. raw:: html

    <script>
        var package = "perl-list-someutils";
        var versions = ["0.59","0.59","0.59","0.59","0.58"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-list-someutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-list-someutils/README.html