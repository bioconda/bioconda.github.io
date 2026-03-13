:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rseg'
.. highlight: bash

rseg
====

.. conda:recipe:: rseg
   :replaces_section_title:
   :noindex:

   The RSEG software package is used to analyze ChIP\-Seq data\, especially for identifying genomic regions and their boundaries marked by diffusive histone modification markers\, such as H3K36me3 and H3K27me3.

   :homepage: https://smithlabresearch.org/software/rseg
   :documentation: https://smithlabresearch.org/wp-content/uploads/rseg_manual-v0.4.9.pdf
   
   :developer docs: https://github.com/smithlabcode/rseg
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`rseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseg/meta.yaml>`_

   


.. conda:package:: rseg

   |downloads_rseg| |docker_rseg|

   :versions:
      
      

      ``0.4.9-3``,  ``0.4.9-1``,  ``0.4.9-0``

      

   
   :depends on bayestyper: 
   :depends on libgcc: ``>=13``
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

    pixi global install rseg

to add into an existing workspace instead, run::

    pixi add rseg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rseg

Alternatively, to install into a new environment, run::

    conda create -n envname rseg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rseg:<tag>

(see `rseg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rseg| image:: https://img.shields.io/conda/dn/bioconda/rseg.svg?style=flat
   :target: https://anaconda.org/bioconda/rseg
   :alt:   (downloads)
.. |docker_rseg| image:: https://quay.io/repository/biocontainers/rseg/status
   :target: https://quay.io/repository/biocontainers/rseg
.. _`rseg/tags`: https://quay.io/repository/biocontainers/rseg?tab=tags


.. raw:: html

    <script>
        var package = "rseg";
        var versions = ["0.4.9","0.4.9","0.4.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rseg/README.html