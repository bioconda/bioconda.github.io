:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'telseq'
.. highlight: bash

telseq
======

.. conda:recipe:: telseq
   :replaces_section_title:
   :noindex:

   A software for calculating telomere length

   :homepage: https://github.com/zd1/telseq
   :license: GPL-3
   :recipe: /`telseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telseq/meta.yaml>`_

   


.. conda:package:: telseq

   |downloads_telseq| |docker_telseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.2-8</code>,  <code>0.0.2-7</code>,  <code>0.0.2-6</code>,  <code>0.0.2-5</code>,  <code>0.0.2-4</code>,  <code>0.0.2-3</code>,  <code>0.0.2-2</code>,  <code>0.0.2-1</code>,  <code>0.0.2-0</code>,  </span></summary>
      

      ``0.0.2-8``,  ``0.0.2-7``,  ``0.0.2-6``,  ``0.0.2-5``,  ``0.0.2-4``,  ``0.0.2-3``,  ``0.0.2-2``,  ``0.0.2-1``,  ``0.0.2-0``,  ``0.0.1-1``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bamtools: ``>=2.5.2,<2.6.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

   :additional platforms:
      

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

    pixi global install telseq

to add into an existing workspace instead, run::

    pixi add telseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install telseq

Alternatively, to install into a new environment, run::

    conda create -n envname telseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/telseq:<tag>

(see `telseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_telseq| image:: https://img.shields.io/conda/dn/bioconda/telseq.svg?style=flat
   :target: https://anaconda.org/bioconda/telseq
   :alt:   (downloads)
.. |docker_telseq| image:: https://quay.io/repository/biocontainers/telseq/status
   :target: https://quay.io/repository/biocontainers/telseq
.. _`telseq/tags`: https://quay.io/repository/biocontainers/telseq?tab=tags


.. raw:: html

    <script>
        var package = "telseq";
        var versions = ["0.0.2","0.0.2","0.0.2","0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/telseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/telseq/README.html