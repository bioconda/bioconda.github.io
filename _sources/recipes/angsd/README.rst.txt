:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'angsd'
.. highlight: bash

angsd
=====

.. conda:recipe:: angsd
   :replaces_section_title:
   :noindex:

   ANGSD\: Analysis of next generation Sequencing Data

   :homepage: http://www.popgen.dk/angsd/index.php/ANGSD
   :license: GPLv3, MIT
   :recipe: /`angsd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/angsd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/angsd/meta.yaml>`_
   :links: biotools: :biotools:`angsd`, doi: :doi:`10.1186/s12859-014-0356-4`

   


.. conda:package:: angsd

   |downloads_angsd| |docker_angsd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.940-4</code>,  <code>0.940-3</code>,  <code>0.940-2</code>,  <code>0.940-1</code>,  <code>0.940-0</code>,  <code>0.939-1</code>,  <code>0.939-0</code>,  <code>0.937-0</code>,  <code>0.935-3</code>,  </span></summary>
      

      ``0.940-4``,  ``0.940-3``,  ``0.940-2``,  ``0.940-1``,  ``0.940-0``,  ``0.939-1``,  ``0.939-0``,  ``0.937-0``,  ``0.935-3``,  ``0.935-2``,  ``0.935-1``,  ``0.935-0``,  ``0.933-1``,  ``0.933-0``,  ``0.931-1``,  ``0.931-0``,  ``0.923-0``,  ``0.921-2``,  ``0.921-1``,  ``0.921-0``,  ``0.910-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on xz: 
   :depends on zlib: 

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

    pixi global install angsd

to add into an existing workspace instead, run::

    pixi add angsd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install angsd

Alternatively, to install into a new environment, run::

    conda create -n envname angsd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/angsd:<tag>

(see `angsd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_angsd| image:: https://img.shields.io/conda/dn/bioconda/angsd.svg?style=flat
   :target: https://anaconda.org/bioconda/angsd
   :alt:   (downloads)
.. |docker_angsd| image:: https://quay.io/repository/biocontainers/angsd/status
   :target: https://quay.io/repository/biocontainers/angsd
.. _`angsd/tags`: https://quay.io/repository/biocontainers/angsd?tab=tags


.. raw:: html

    <script>
        var package = "angsd";
        var versions = ["0.940","0.940","0.940","0.940","0.940"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/angsd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/angsd/README.html