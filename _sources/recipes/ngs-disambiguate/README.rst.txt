:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-disambiguate'
.. highlight: bash

ngs-disambiguate
================

.. conda:recipe:: ngs-disambiguate
   :replaces_section_title:
   :noindex:

   Disambiguation algorithm for reads aligned to human and mouse genomes using Tophat or BWA mem.

   :homepage: https://github.com/AstraZeneca-NGS/disambiguate
   :license: MIT / MIT
   :recipe: /`ngs-disambiguate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-disambiguate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-disambiguate/meta.yaml>`_

   


.. conda:package:: ngs-disambiguate

   |downloads_ngs-disambiguate| |docker_ngs-disambiguate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2018.05.03-12</code>,  <code>2018.05.03-11</code>,  <code>2018.05.03-10</code>,  <code>2018.05.03-9</code>,  <code>2018.05.03-8</code>,  <code>2018.05.03-7</code>,  <code>2018.05.03-6</code>,  <code>2018.05.03-5</code>,  <code>2018.05.03-4</code>,  </span></summary>
      

      ``2018.05.03-12``,  ``2018.05.03-11``,  ``2018.05.03-10``,  ``2018.05.03-9``,  ``2018.05.03-8``,  ``2018.05.03-7``,  ``2018.05.03-6``,  ``2018.05.03-5``,  ``2018.05.03-4``,  ``2018.05.03-3``,  ``2018.05.03-2``,  ``2018.05.03-1``,  ``2018.05.03-0``,  ``2016.11.10-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bamtools: ``>=2.5.3,<3.0a0``
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

    pixi global install ngs-disambiguate

to add into an existing workspace instead, run::

    pixi add ngs-disambiguate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ngs-disambiguate

Alternatively, to install into a new environment, run::

    conda create -n envname ngs-disambiguate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ngs-disambiguate:<tag>

(see `ngs-disambiguate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ngs-disambiguate| image:: https://img.shields.io/conda/dn/bioconda/ngs-disambiguate.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-disambiguate
   :alt:   (downloads)
.. |docker_ngs-disambiguate| image:: https://quay.io/repository/biocontainers/ngs-disambiguate/status
   :target: https://quay.io/repository/biocontainers/ngs-disambiguate
.. _`ngs-disambiguate/tags`: https://quay.io/repository/biocontainers/ngs-disambiguate?tab=tags


.. raw:: html

    <script>
        var package = "ngs-disambiguate";
        var versions = ["2018.05.03","2018.05.03","2018.05.03","2018.05.03","2018.05.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-disambiguate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-disambiguate/README.html