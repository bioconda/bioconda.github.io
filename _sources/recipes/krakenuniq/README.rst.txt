:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krakenuniq'
.. highlight: bash

krakenuniq
==========

.. conda:recipe:: krakenuniq
   :replaces_section_title:
   :noindex:

   Metagenomics classifier with unique k\-mer counting for more specific results

   :homepage: https://github.com/fbreitwieser/krakenuniq
   :license: GPLv3
   :recipe: /`krakenuniq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakenuniq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakenuniq/meta.yaml>`_
   :links: biotools: :biotools:`krakenhll`

   


.. conda:package:: krakenuniq

   |downloads_krakenuniq| |docker_krakenuniq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-4</code>,  <code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1a-1</code>,  </span></summary>
      

      ``1.0.4-4``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1a-1``,  ``1.0.1a-0``,  ``1.0.0-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7-0``,  ``0.6-2``,  ``0.6-1``,  ``0.6-0``,  ``0.5.8-4``,  ``0.5.8-3``,  ``0.5.8-2``,  ``0.5.8-1``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.3-0``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bc: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on curl: 
   :depends on kmer-jellyfish: ``>=1,<2``
   :depends on libgcc: ``>=12``
   :depends on libstdcxx: ``>=12``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-libwww-perl: 
   :depends on perl-lwp-protocol-https: 
   :depends on rsync: 
   :depends on tar: 
   :depends on wget: 

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

    pixi global install krakenuniq

to add into an existing workspace instead, run::

    pixi add krakenuniq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install krakenuniq

Alternatively, to install into a new environment, run::

    conda create -n envname krakenuniq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/krakenuniq:<tag>

(see `krakenuniq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_krakenuniq| image:: https://img.shields.io/conda/dn/bioconda/krakenuniq.svg?style=flat
   :target: https://anaconda.org/bioconda/krakenuniq
   :alt:   (downloads)
.. |docker_krakenuniq| image:: https://quay.io/repository/biocontainers/krakenuniq/status
   :target: https://quay.io/repository/biocontainers/krakenuniq
.. _`krakenuniq/tags`: https://quay.io/repository/biocontainers/krakenuniq?tab=tags


.. raw:: html

    <script>
        var package = "krakenuniq";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krakenuniq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krakenuniq/README.html