:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mtm-align'
.. highlight: bash

mtm-align
=========

.. conda:recipe:: mtm-align
   :replaces_section_title:
   :noindex:

   Align multiple protein structures

   :homepage: http://yanglab.nankai.edu.cn/mTM-align/help/
   :license: Unknown
   :recipe: /`mtm-align <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtm-align>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtm-align/meta.yaml>`_

   


.. conda:package:: mtm-align

   |downloads_mtm-align| |docker_mtm-align|

   :versions:
      
      

      ``20220104-3``,  ``20220104-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install mtm-align

to add into an existing workspace instead, run::

    pixi add mtm-align

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mtm-align

Alternatively, to install into a new environment, run::

    conda create -n envname mtm-align

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mtm-align:<tag>

(see `mtm-align/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mtm-align| image:: https://img.shields.io/conda/dn/bioconda/mtm-align.svg?style=flat
   :target: https://anaconda.org/bioconda/mtm-align
   :alt:   (downloads)
.. |docker_mtm-align| image:: https://quay.io/repository/biocontainers/mtm-align/status
   :target: https://quay.io/repository/biocontainers/mtm-align
.. _`mtm-align/tags`: https://quay.io/repository/biocontainers/mtm-align?tab=tags


.. raw:: html

    <script>
        var package = "mtm-align";
        var versions = ["20220104","20220104"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtm-align/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtm-align/README.html