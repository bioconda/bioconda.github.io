:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xtandem'
.. highlight: bash

xtandem
=======

.. conda:recipe:: xtandem
   :replaces_section_title:
   :noindex:

   X\! Tandem open source is software that can match tandem mass spectra with peptide sequences\, in a process that has come to be known as protein identification.

   :homepage: https://www.thegpm.org/TANDEM/index.html
   :license: The-Artistic-License
   :recipe: /`xtandem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtandem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtandem/meta.yaml>`_
   :links: biotools: :biotools:`xtandem`, doi: :doi:`10.1093/bioinformatics/bth092`

   


.. conda:package:: xtandem

   |downloads_xtandem| |docker_xtandem|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>15.12.15.2-11</code>,  <code>15.12.15.2-10</code>,  <code>15.12.15.2-9</code>,  <code>15.12.15.2-8</code>,  <code>15.12.15.2-7</code>,  <code>15.12.15.2-6</code>,  <code>15.12.15.2-5</code>,  <code>15.12.15.2-4</code>,  <code>15.12.15.2-3</code>,  </span></summary>
      

      ``15.12.15.2-11``,  ``15.12.15.2-10``,  ``15.12.15.2-9``,  ``15.12.15.2-8``,  ``15.12.15.2-7``,  ``15.12.15.2-6``,  ``15.12.15.2-5``,  ``15.12.15.2-4``,  ``15.12.15.2-3``,  ``15.12.15.2-2``,  ``15.12.15.2-1``,  ``15.12.15.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on expat: 
   :depends on libexpat: ``>=2.7.0,<3.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install xtandem

to add into an existing workspace instead, run::

    pixi add xtandem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install xtandem

Alternatively, to install into a new environment, run::

    conda create -n envname xtandem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/xtandem:<tag>

(see `xtandem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_xtandem| image:: https://img.shields.io/conda/dn/bioconda/xtandem.svg?style=flat
   :target: https://anaconda.org/bioconda/xtandem
   :alt:   (downloads)
.. |docker_xtandem| image:: https://quay.io/repository/biocontainers/xtandem/status
   :target: https://quay.io/repository/biocontainers/xtandem
.. _`xtandem/tags`: https://quay.io/repository/biocontainers/xtandem?tab=tags


.. raw:: html

    <script>
        var package = "xtandem";
        var versions = ["15.12.15.2","15.12.15.2","15.12.15.2","15.12.15.2","15.12.15.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xtandem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xtandem/README.html