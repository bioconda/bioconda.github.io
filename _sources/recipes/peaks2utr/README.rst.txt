:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peaks2utr'
.. highlight: bash

peaks2utr
=========

.. conda:recipe:: peaks2utr
   :replaces_section_title:
   :noindex:

   A robust\, parallelized Python CLI for annotating three\_prime\_UTR

   :homepage: https://github.com/haessar/peaks2utr
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`peaks2utr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peaks2utr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peaks2utr/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad112`

   


.. conda:package:: peaks2utr

   |downloads_peaks2utr| |docker_peaks2utr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.0-0</code>,  <code>1.2.6-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  </span></summary>
      

      ``1.5.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on asgiref: 
   :depends on gffutils: ``0.10.1``
   :depends on importlib-resources: 
   :depends on macs2: ``2.2.9.1``
   :depends on numpy: ``>=1.21.4``
   :depends on psutil: 
   :depends on pybedtools: 
   :depends on pysam: 
   :depends on python: ``>=3.8,<3.12``
   :depends on requests: 
   :depends on tqdm: 
   :depends on typing-extensions: 
   :depends on zipp: 

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

    pixi global install peaks2utr

to add into an existing workspace instead, run::

    pixi add peaks2utr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install peaks2utr

Alternatively, to install into a new environment, run::

    conda create -n envname peaks2utr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/peaks2utr:<tag>

(see `peaks2utr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_peaks2utr| image:: https://img.shields.io/conda/dn/bioconda/peaks2utr.svg?style=flat
   :target: https://anaconda.org/bioconda/peaks2utr
   :alt:   (downloads)
.. |docker_peaks2utr| image:: https://quay.io/repository/biocontainers/peaks2utr/status
   :target: https://quay.io/repository/biocontainers/peaks2utr
.. _`peaks2utr/tags`: https://quay.io/repository/biocontainers/peaks2utr?tab=tags


.. raw:: html

    <script>
        var package = "peaks2utr";
        var versions = ["1.5.0","1.4.1","1.4.0","1.3.3","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peaks2utr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peaks2utr/README.html