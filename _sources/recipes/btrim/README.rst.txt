:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'btrim'
.. highlight: bash

btrim
=====

.. conda:recipe:: btrim
   :replaces_section_title:
   :noindex:

   This tool is made to remove \"tips\" \(short dead ends\) from a compacted de Bruijn graph and more generally to remove sequencing errors. Used in Bcool a short read corrector \(https\:\/\/arxiv.org\/abs\/1711.03336\)

   :homepage: https://github.com/Malfoy/BTRIM
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`btrim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/btrim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/btrim/meta.yaml>`_

   


.. conda:package:: btrim

   |downloads_btrim| |docker_btrim|

   :versions:
      
      

      ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.0-0``

      

   
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

    pixi global install btrim

to add into an existing workspace instead, run::

    pixi add btrim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install btrim

Alternatively, to install into a new environment, run::

    conda create -n envname btrim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/btrim:<tag>

(see `btrim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_btrim| image:: https://img.shields.io/conda/dn/bioconda/btrim.svg?style=flat
   :target: https://anaconda.org/bioconda/btrim
   :alt:   (downloads)
.. |docker_btrim| image:: https://quay.io/repository/biocontainers/btrim/status
   :target: https://quay.io/repository/biocontainers/btrim
.. _`btrim/tags`: https://quay.io/repository/biocontainers/btrim?tab=tags


.. raw:: html

    <script>
        var package = "btrim";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/btrim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/btrim/README.html