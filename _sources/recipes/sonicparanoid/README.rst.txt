:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sonicparanoid'
.. highlight: bash

sonicparanoid
=============

.. conda:recipe:: sonicparanoid
   :replaces_section_title:
   :noindex:

   SonicParanoid\: fast\, accurate\, and comprehensive orthology inference with machine learning and language models

   :homepage: https://gitlab.com/salvo981/sonicparanoid2
   :documentation: https://gitlab.com/salvo981/sonicparanoid2/-/wikis/home
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`sonicparanoid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonicparanoid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonicparanoid/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.05.14.540736`, doi: :doi:`10.1093/bioinformatics/bty631`, biotools: :biotools:`SonicParanoid`

   


.. conda:package:: sonicparanoid

   |downloads_sonicparanoid| |docker_sonicparanoid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.9-0</code>,  <code>2.0.8-1</code>,  <code>2.0.8-0</code>,  <code>2.0.7-0</code>,  <code>1.3.8-4</code>,  <code>1.3.8-3</code>,  <code>1.3.8-2</code>,  <code>1.3.8-1</code>,  <code>1.3.8-0</code>,  </span></summary>
      

      ``2.0.9-0``,  ``2.0.8-1``,  ``2.0.8-0``,  ``2.0.7-0``,  ``1.3.8-4``,  ``1.3.8-3``,  ``1.3.8-2``,  ``1.3.8-1``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-1``,  ``1.3.6-0``,  ``1.0.14-4``,  ``1.0.14-3``,  ``1.0.14-2``,  ``1.0.14-1``,  ``1.0.14-0``,  ``1.0.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.83``
   :depends on blast: ``>=2.12.0``
   :depends on diamond: ``>=2.0.12``
   :depends on filetype: ``>=1.2.0``
   :depends on gdown: ``>=5.2.0``
   :depends on gensim: ``>=4.2.0``
   :depends on libgcc: ``>=13``
   :depends on mcl: ``>=14.137``
   :depends on mmseqs2: ``>=13.45111``
   :depends on mypy: ``>=1.10.0``
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on pandas: ``>=2.2.0``
   :depends on psutil: ``>=6.0.0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-learn: ``>=1.5.0``
   :depends on scipy: ``<1.13``
   :depends on smart-open: ``>=7.0.1``
   :depends on tqdm: ``>=4.66.0``

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

    pixi global install sonicparanoid

to add into an existing workspace instead, run::

    pixi add sonicparanoid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sonicparanoid

Alternatively, to install into a new environment, run::

    conda create -n envname sonicparanoid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sonicparanoid:<tag>

(see `sonicparanoid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sonicparanoid| image:: https://img.shields.io/conda/dn/bioconda/sonicparanoid.svg?style=flat
   :target: https://anaconda.org/bioconda/sonicparanoid
   :alt:   (downloads)
.. |docker_sonicparanoid| image:: https://quay.io/repository/biocontainers/sonicparanoid/status
   :target: https://quay.io/repository/biocontainers/sonicparanoid
.. _`sonicparanoid/tags`: https://quay.io/repository/biocontainers/sonicparanoid?tab=tags


.. raw:: html

    <script>
        var package = "sonicparanoid";
        var versions = ["2.0.9","2.0.8","2.0.8","2.0.7","1.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sonicparanoid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sonicparanoid/README.html