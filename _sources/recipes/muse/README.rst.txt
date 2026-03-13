:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'muse'
.. highlight: bash

muse
====

.. conda:recipe:: muse
   :replaces_section_title:
   :noindex:

   An accurate and ultra\-fast somatic point mutation calling tool for whole\-genome sequencing \(WGS\) and whole\-exome sequencing \(WES\) data from heterogeneous tumor samples.

   :homepage: https://bioinformatics.mdanderson.org/public-software/muse
   :documentation: https://github.com/wwylab/MuSE/blob/v2.1.2/README.md
   
   :developer docs: https://github.com/wwylab/MuSE
   :license: GPL / GPL-2.0-or-later
   :recipe: /`muse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muse/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.278456.123`, doi: :doi:`10.1186/s13059-016-1029-6`

   


.. conda:package:: muse

   |downloads_muse| |docker_muse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.2-3</code>,  <code>2.1.2-2</code>,  <code>2.1.2-1</code>,  <code>2.1.2-0</code>,  <code>1.0.rc-8</code>,  <code>1.0.rc-7</code>,  <code>1.0.rc-6</code>,  <code>1.0.rc-5</code>,  <code>1.0.rc-4</code>,  </span></summary>
      

      ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``,  ``1.0.rc-8``,  ``1.0.rc-7``,  ``1.0.rc-6``,  ``1.0.rc-5``,  ``1.0.rc-4``,  ``1.0.rc-3``,  ``1.0.rc-2``,  ``1.0.rc-1``,  ``1.0.rc-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on icu: ``>=73.2,<74.0a0``
   :depends on libcurl: ``>=8.10.1,<9.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on liblzma: ``>=5.6.3,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install muse

to add into an existing workspace instead, run::

    pixi add muse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install muse

Alternatively, to install into a new environment, run::

    conda create -n envname muse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/muse:<tag>

(see `muse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_muse| image:: https://img.shields.io/conda/dn/bioconda/muse.svg?style=flat
   :target: https://anaconda.org/bioconda/muse
   :alt:   (downloads)
.. |docker_muse| image:: https://quay.io/repository/biocontainers/muse/status
   :target: https://quay.io/repository/biocontainers/muse
.. _`muse/tags`: https://quay.io/repository/biocontainers/muse?tab=tags


.. raw:: html

    <script>
        var package = "muse";
        var versions = ["2.1.2","2.1.2","2.1.2","2.1.2","1.0.rc"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/muse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/muse/README.html