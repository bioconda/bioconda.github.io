:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribotricer'
.. highlight: bash

ribotricer
==========

.. conda:recipe:: ribotricer
   :replaces_section_title:
   :noindex:

   Python package to detect translating ORF from Ribo\-seq data

   :homepage: https://github.com/smithlabcode/ribotricer
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`ribotricer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotricer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotricer/meta.yaml>`_

   Ribotricer is a method for detecting actively\-translating 
   ORFs by directly leveraging the three\-nucleotide periodicity of
   Ribo\-seq data. It accurately identifies both short and long
   active ORFs.



.. conda:package:: ribotricer

   |downloads_ribotricer| |docker_ribotricer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: ``>=6.0``
   :depends on click-help-colors: ``>=0.3``
   :depends on matplotlib-base: ``>=2.1.0``
   :depends on numpy: ``>=1.11.0``
   :depends on pandas: ``>=0.20.3``
   :depends on pyfaidx: ``>=0.5.0``
   :depends on pysam: ``>=0.11.2.2``
   :depends on python: ``>3``
   :depends on quicksect: ``>=0.2.0``
   :depends on scipy: ``>=0.19.1``
   :depends on tqdm: ``>=4.23.4``

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

    pixi global install ribotricer

to add into an existing workspace instead, run::

    pixi add ribotricer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ribotricer

Alternatively, to install into a new environment, run::

    conda create -n envname ribotricer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ribotricer:<tag>

(see `ribotricer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ribotricer| image:: https://img.shields.io/conda/dn/bioconda/ribotricer.svg?style=flat
   :target: https://anaconda.org/bioconda/ribotricer
   :alt:   (downloads)
.. |docker_ribotricer| image:: https://quay.io/repository/biocontainers/ribotricer/status
   :target: https://quay.io/repository/biocontainers/ribotricer
.. _`ribotricer/tags`: https://quay.io/repository/biocontainers/ribotricer?tab=tags


.. raw:: html

    <script>
        var package = "ribotricer";
        var versions = ["1.5.0","1.4.0","1.3.3","1.3.2","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotricer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotricer/README.html