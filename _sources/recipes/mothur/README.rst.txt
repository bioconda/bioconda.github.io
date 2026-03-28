:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mothur'
.. highlight: bash

mothur
======

.. conda:recipe:: mothur
   :replaces_section_title:
   :noindex:

   This project seeks to develop a single piece of open\-source\, expandable software to fill the bioinformatics needs of the microbial ecology community.

   :homepage: https://www.mothur.org
   :documentation: https://mothur.org/wiki/mothur_manual
   
   :developer docs: https://github.com/mothur/mothur
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mothur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mothur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mothur/meta.yaml>`_
   :links: doi: :doi:`10.1128/AEM.01541-09`, usegalaxy-eu: :usegalaxy-eu:`mothur_get_label`, biotools: :biotools:`mothur`

   


.. conda:package:: mothur

   |downloads_mothur| |docker_mothur|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.5-0</code>,  <code>1.48.3-0</code>,  <code>1.48.0-3</code>,  <code>1.48.0-2</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.47.0-2</code>,  <code>1.47.0-1</code>,  <code>1.47.0-0</code>,  </span></summary>
      

      ``1.48.5-0``,  ``1.48.3-0``,  ``1.48.0-3``,  ``1.48.0-2``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.47.0-2``,  ``1.47.0-1``,  ``1.47.0-0``,  ``1.46.1-1``,  ``1.46.1-0``,  ``1.46.0-0``,  ``1.45.3-0``,  ``1.44.11-0``,  ``1.44.1-2``,  ``1.44.1-1``,  ``1.44.1-0``,  ``1.44.0-0``,  ``1.43.0-0``,  ``1.42.3-0``,  ``1.42.1-0``,  ``1.42.0-0``,  ``1.41.3-0``,  ``1.41.0-0``,  ``1.40.5-0``,  ``1.39.5-4``,  ``1.39.5-3``,  ``1.39.5-2``,  ``1.39.5-1``,  ``1.39.5-0``,  ``1.38.1.1-0``,  ``1.36.1-2``,  ``1.36.1-1``,  ``1.36.1-0``,  ``1.25.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: ``>=2.17.0,<2.18.0a0``
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on readline: ``>=8.3,<9.0a0``
   :depends on sra-tools: ``>=3.2.1,<4.0a0``
   :depends on vsearch: ``>=2.15.2``
   :depends on vsearch: ``>=2.30.3,<3.0a0``

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

    pixi global install mothur

to add into an existing workspace instead, run::

    pixi add mothur

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mothur

Alternatively, to install into a new environment, run::

    conda create -n envname mothur

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mothur:<tag>

(see `mothur/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mothur| image:: https://img.shields.io/conda/dn/bioconda/mothur.svg?style=flat
   :target: https://anaconda.org/bioconda/mothur
   :alt:   (downloads)
.. |docker_mothur| image:: https://quay.io/repository/biocontainers/mothur/status
   :target: https://quay.io/repository/biocontainers/mothur
.. _`mothur/tags`: https://quay.io/repository/biocontainers/mothur?tab=tags


.. raw:: html

    <script>
        var package = "mothur";
        var versions = ["1.48.5","1.48.3","1.48.0","1.48.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mothur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mothur/README.html