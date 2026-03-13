:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trackplot'
.. highlight: bash

trackplot
=========

.. conda:recipe:: trackplot
   :replaces_section_title:
   :noindex:

   The trackplot is a tool for visualizing various next\-generation sequencing \(NGS\) data\, including DNA\-seq\, RNA\-seq\, single\-cell RNA\-seq and full\-length sequencing datasets.

   :homepage: https://github.com/ygidtu/trackplot
   :documentation: https://trackplot.readthedocs.io/en/latest/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`trackplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trackplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trackplot/meta.yaml>`_

   


.. conda:package:: trackplot

   |downloads_trackplot| |docker_trackplot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.7-0</code>,  <code>0.5.6-0</code>,  <code>0.5.5-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-0</code>,  <code>0.3.8-0</code>,  </span></summary>
      

      ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.6-0``,  ``0.2.4-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on adjusttext: ``>=0.7.3``
   :depends on cairocffi: ``>=1.4.0``
   :depends on click: 
   :depends on click-option-group: 
   :depends on filetype: ``>=1.2.0``
   :depends on flask: ``>=2.3.2``
   :depends on hicmatrix: 
   :depends on loguru: 
   :depends on matplotlib-base: ``>=3.6.3``
   :depends on numpy: ``>=1.24.1``
   :depends on pandas: ``>=1.5.3``
   :depends on pybigwig: ``>=0.3.18``
   :depends on pysam: ``>=0.21.0``
   :depends on python: ``>=3.8,<3.12``
   :depends on requests: 
   :depends on scipy: ``>=1.10.0``
   :depends on seaborn-base: ``>=0.12.2``
   :depends on xmltodict: 

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

    pixi global install trackplot

to add into an existing workspace instead, run::

    pixi add trackplot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trackplot

Alternatively, to install into a new environment, run::

    conda create -n envname trackplot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trackplot:<tag>

(see `trackplot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trackplot| image:: https://img.shields.io/conda/dn/bioconda/trackplot.svg?style=flat
   :target: https://anaconda.org/bioconda/trackplot
   :alt:   (downloads)
.. |docker_trackplot| image:: https://quay.io/repository/biocontainers/trackplot/status
   :target: https://quay.io/repository/biocontainers/trackplot
.. _`trackplot/tags`: https://quay.io/repository/biocontainers/trackplot?tab=tags


.. raw:: html

    <script>
        var package = "trackplot";
        var versions = ["0.5.7","0.5.6","0.5.5","0.5.3","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trackplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trackplot/README.html