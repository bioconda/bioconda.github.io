:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sereal-encoder'
.. highlight: bash

perl-sereal-encoder
===================

.. conda:recipe:: perl-sereal-encoder
   :replaces_section_title:
   :noindex:

   Fast\, compact\, powerful binary serialization.

   :homepage: https://metacpan.org/pod/Sereal::Encoder
   :license: Perl_5
   :recipe: /`perl-sereal-encoder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sereal-encoder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sereal-encoder/meta.yaml>`_

   


.. conda:package:: perl-sereal-encoder

   |downloads_perl-sereal-encoder| |docker_perl-sereal-encoder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.004-0</code>,  <code>4.025-3</code>,  <code>4.025-2</code>,  <code>4.025-1</code>,  <code>4.025-0</code>,  <code>4.024-0</code>,  <code>4.023-0</code>,  <code>4.021-1</code>,  <code>4.021-0</code>,  </span></summary>
      

      ``5.004-0``,  ``4.025-3``,  ``4.025-2``,  ``4.025-1``,  ``4.025-0``,  ``4.024-0``,  ``4.023-0``,  ``4.021-1``,  ``4.021-0``,  ``4.020-0``,  ``4.019-0``,  ``4.007-1``,  ``4.007-0``,  ``4.005-0``,  ``3.015-1``,  ``3.015-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-devel-checklib: ``>=1.16,<2.0a0``
   :depends on perl-extutils-parsexs: ``>=3.58,<4.0a0``
   :depends on perl-sereal-decoder: ``>=5.004``
   :depends on perl-sereal-decoder: ``>=5.4,<6.0a0``

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

    pixi global install perl-sereal-encoder

to add into an existing workspace instead, run::

    pixi add perl-sereal-encoder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-sereal-encoder

Alternatively, to install into a new environment, run::

    conda create -n envname perl-sereal-encoder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-sereal-encoder:<tag>

(see `perl-sereal-encoder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-sereal-encoder| image:: https://img.shields.io/conda/dn/bioconda/perl-sereal-encoder.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sereal-encoder
   :alt:   (downloads)
.. |docker_perl-sereal-encoder| image:: https://quay.io/repository/biocontainers/perl-sereal-encoder/status
   :target: https://quay.io/repository/biocontainers/perl-sereal-encoder
.. _`perl-sereal-encoder/tags`: https://quay.io/repository/biocontainers/perl-sereal-encoder?tab=tags


.. raw:: html

    <script>
        var package = "perl-sereal-encoder";
        var versions = ["5.004","4.025","4.025","4.025","4.025"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sereal-encoder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sereal-encoder/README.html