:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gmap'
.. highlight: bash

gmap
====

.. conda:recipe:: gmap
   :replaces_section_title:
   :noindex:

   Genomic mapping and alignment program for mRNA and EST sequences.

   :homepage: http://research-pub.gene.com/gmap
   :license: APACHE / Apache-2.0
   :recipe: /`gmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmap/meta.yaml>`_
   :links: biotools: :biotools:`gmap`, biotools: :biotools:`gsnap`, doi: :doi:`10.1093/bioinformatics/bti310`, doi: :doi:`10.1093/bioinformatics/btq057`

   


.. conda:package:: gmap

   |downloads_gmap| |docker_gmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2025.07.31-1</code>,  <code>2025.07.31-0</code>,  <code>2025.04.19-0</code>,  <code>2025.04.18-0</code>,  <code>2024.11.20-3</code>,  <code>2024.11.20-2</code>,  <code>2024.11.20-1</code>,  <code>2024.11.20-0</code>,  <code>2024.10.20-0</code>,  </span></summary>
      

      ``2025.07.31-1``,  ``2025.07.31-0``,  ``2025.04.19-0``,  ``2025.04.18-0``,  ``2024.11.20-3``,  ``2024.11.20-2``,  ``2024.11.20-1``,  ``2024.11.20-0``,  ``2024.10.20-0``,  ``2024.10.10-0``,  ``2024.09.18-0``,  ``2024.08.14-0``,  ``2024.05.20-0``,  ``2024.05.07-0``,  ``2024.03.15-2``,  ``2024.03.15-1``,  ``2024.03.15-0``,  ``2024.02.22-0``,  ``2023.12.01-0``,  ``2023.10.10-1``,  ``2023.10.10-0``,  ``2023.10.01-0``,  ``2023.07.20-1``,  ``2023.07.20-0``,  ``2023.06.01-0``,  ``2023.04.28-1``,  ``2023.04.28-0``,  ``2023.03.24-1``,  ``2023.03.24-0``,  ``2021.08.25-2``,  ``2021.08.25-1``,  ``2021.08.25-0``,  ``2021.05.27-0``,  ``2021.03.08-0``,  ``2021.02.22-3``,  ``2021.02.22-1``,  ``2021.02.22-0``,  ``2020.10.14-0``,  ``2020.06.30-0``,  ``2020.06.01-1``,  ``2020.06.01-0``,  ``2020.04.08-1``,  ``2020.04.08-0``,  ``2019.09.12-1``,  ``2019.09.12-0``,  ``2019.06.10-0``,  ``2019.02.26-0``,  ``2018.07.04-0``,  ``2018.03.25-2``,  ``2018.03.25-1``,  ``2018.03.25-0``,  ``2017.11.15-4``,  ``2017.11.15-3``,  ``2017.11.15-2``,  ``2017.11.15-1``,  ``2017.11.15-0``,  ``2017.10.30-6``,  ``2017.10.30-5``,  ``2017.10.30-4``,  ``2017.10.30-3``,  ``2017.10.30-2``,  ``2017.10.30-1``,  ``2017.10.30-0``,  ``2017.09.30-7``,  ``2017.09.30-6``,  ``2017.09.30-5``,  ``2017.09.30-4``,  ``2017.09.30-3``,  ``2017.09.30-2``,  ``2017.09.30-1``,  ``2017.09.30-0``,  ``2017.05.08-6``,  ``2017.05.08-5``,  ``2017.05.08-4``,  ``2017.05.08-3``,  ``2017.05.08-2``,  ``2017.05.08-1``,  ``2017.05.08-0``,  ``2017.02.15-3``,  ``2017.02.15-2``,  ``2017.02.15-1``,  ``2016.09.23-3``,  ``2016.09.23-2``,  ``2016.09.23-1``,  ``2016.09.23-0``,  ``2015.12.31-5``,  ``2015.12.31-4``,  ``2015.12.31-3``,  ``2015.12.31-2``,  ``2015.12.31-1``,  ``2015.12.31-0``,  ``2015.09.10-2``,  ``2015.09.10-1``,  ``2015.09.10-0``,  ``2014.12.28-6``,  ``2014.12.28-5``,  ``2014.12.23-6``,  ``2014.12.23-5``,  ``2014.12.23-4``,  ``2014.12.23-3``,  ``2014.12.23-2``,  ``2014.12.23-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-file-util: 

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

    pixi global install gmap

to add into an existing workspace instead, run::

    pixi add gmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gmap

Alternatively, to install into a new environment, run::

    conda create -n envname gmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gmap:<tag>

(see `gmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gmap| image:: https://img.shields.io/conda/dn/bioconda/gmap.svg?style=flat
   :target: https://anaconda.org/bioconda/gmap
   :alt:   (downloads)
.. |docker_gmap| image:: https://quay.io/repository/biocontainers/gmap/status
   :target: https://quay.io/repository/biocontainers/gmap
.. _`gmap/tags`: https://quay.io/repository/biocontainers/gmap?tab=tags


.. raw:: html

    <script>
        var package = "gmap";
        var versions = ["2025.07.31","2025.07.31","2025.04.19","2025.04.18","2024.11.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmap/README.html