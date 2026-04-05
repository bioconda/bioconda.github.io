:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sift4g'
.. highlight: bash

sift4g
======

.. conda:recipe:: sift4g
   :replaces_section_title:
   :noindex:

   SIFT 4G is a faster version of SIFT that enables us to scale up and provide SIFT predictions for more organisms.

   :homepage: https://github.com/rvaser/sift4g
   :documentation: https://sift.bii.a-star.edu.sg/sift4g
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`sift4g <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sift4g>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sift4g/meta.yaml>`_

   


.. conda:package:: sift4g

   |downloads_sift4g| |docker_sift4g|

   :versions:
      
      

      ``2.0.0-8``,  ``2.0.0-6``,  ``2.0.0-5``,  ``2.0.0-4``,  ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``

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

    pixi global install sift4g

to add into an existing workspace instead, run::

    pixi add sift4g

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sift4g

Alternatively, to install into a new environment, run::

    conda create -n envname sift4g

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sift4g:<tag>

(see `sift4g/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sift4g| image:: https://img.shields.io/conda/dn/bioconda/sift4g.svg?style=flat
   :target: https://anaconda.org/bioconda/sift4g
   :alt:   (downloads)
.. |docker_sift4g| image:: https://quay.io/repository/biocontainers/sift4g/status
   :target: https://quay.io/repository/biocontainers/sift4g
.. _`sift4g/tags`: https://quay.io/repository/biocontainers/sift4g?tab=tags


.. raw:: html

    <script>
        var package = "sift4g";
        var versions = ["2.0.0","2.0.0","2.0.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sift4g/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sift4g/README.html