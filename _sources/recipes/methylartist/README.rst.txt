:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methylartist'
.. highlight: bash

methylartist
============

.. conda:recipe:: methylartist
   :replaces_section_title:
   :noindex:

   Tools for parsing and plotting nanopore methylation data.

   :homepage: https://github.com/adamewing/methylartist
   :license: MIT / MIT
   :recipe: /`methylartist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylartist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylartist/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btac292`

   


.. conda:package:: methylartist

   |downloads_methylartist| |docker_methylartist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.11-0</code>,  <code>1.2.7-0</code>,  </span></summary>
      

      ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.11-0``,  ``1.2.7-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bx-python: ``>=0.8.11``
   :depends on matplotlib-base: ``>=3.4.3``
   :depends on numpy: ``>=1.21``
   :depends on ont-fast5-api: ``>=4.0.0``
   :depends on pandas: ``>=1.3.2``
   :depends on pysam: ``>=0.16``
   :depends on python: ``>=3.7``
   :depends on scikit-bio: ``>=0.5.6``
   :depends on scikit-learn: 
   :depends on scipy: ``>=1.7.1``
   :depends on seaborn-base: ``>=0.11.2``
   :depends on tqdm: 

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

    pixi global install methylartist

to add into an existing workspace instead, run::

    pixi add methylartist

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install methylartist

Alternatively, to install into a new environment, run::

    conda create -n envname methylartist

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/methylartist:<tag>

(see `methylartist/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_methylartist| image:: https://img.shields.io/conda/dn/bioconda/methylartist.svg?style=flat
   :target: https://anaconda.org/bioconda/methylartist
   :alt:   (downloads)
.. |docker_methylartist| image:: https://quay.io/repository/biocontainers/methylartist/status
   :target: https://quay.io/repository/biocontainers/methylartist
.. _`methylartist/tags`: https://quay.io/repository/biocontainers/methylartist?tab=tags


.. raw:: html

    <script>
        var package = "methylartist";
        var versions = ["1.5.3","1.5.2","1.5.1","1.5.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methylartist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methylartist/README.html