:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mbttest'
.. highlight: bash

bioconductor-mbttest
====================

.. conda:recipe:: bioconductor-mbttest
   :replaces_section_title:
   :noindex:

   Multiple Beta t\-Tests

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MBttest.html
   :license: GPL-3
   :recipe: /`bioconductor-mbttest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbttest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbttest/meta.yaml>`_
   :links: biotools: :biotools:`mbttest`, doi: :doi:`10.1371/journal.pone.0123658`

   MBttest method was developed from beta t\-test method of Baggerly et al\(2003\). Compared to baySeq \(Hard castle and Kelly 2010\)\, DESeq \(Anders and Huber 2010\) and exact test \(Robinson and Smyth 2007\, 2008\) and the GLM of McCarthy et al\(2012\)\, MBttest is of high work efficiency\,that is\, it has high power\, high conservativeness of FDR estimation and high stability. MBttest is suit\- able to transcriptomic data\, tag data\, SAGE data \(count data\) from small samples or a few replicate libraries. It can be used to identify genes\, mRNA isoforms or tags differentially expressed between two conditions.


.. conda:package:: bioconductor-mbttest

   |downloads_bioconductor-mbttest| |docker_bioconductor-mbttest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.5.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gplots: 
   :depends on r-gtools: 

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

    pixi global install bioconductor-mbttest

to add into an existing workspace instead, run::

    pixi add bioconductor-mbttest

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mbttest

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mbttest

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mbttest:<tag>

(see `bioconductor-mbttest/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mbttest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbttest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mbttest
   :alt:   (downloads)
.. |docker_bioconductor-mbttest| image:: https://quay.io/repository/biocontainers/bioconductor-mbttest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbttest
.. _`bioconductor-mbttest/tags`: https://quay.io/repository/biocontainers/bioconductor-mbttest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mbttest";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbttest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbttest/README.html