:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dajin2'
.. highlight: bash

dajin2
======

.. conda:recipe:: dajin2
   :replaces_section_title:
   :noindex:

   One\-step genotyping tools for targeted long\-read sequencing.

   :homepage: https://github.com/akikuno/DAJIN2
   :documentation: https://github.com/akikuno/DAJIN2/blob/0.9.1/README.md
   
   :license: MIT / MIT
   :recipe: /`dajin2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dajin2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dajin2/meta.yaml>`_

   


.. conda:package:: dajin2

   |downloads_dajin2| |docker_dajin2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.0-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.2-0</code>,  </span></summary>
      

      ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.6-0``,  ``0.5.5.1-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cstag: ``>=1.0.0``
   :depends on flask: ``>=2.2.0``
   :depends on jinja2: ``>=3.1.0``
   :depends on mappy: ``>=2.24``
   :depends on midsv: ``>=0.11.0``
   :depends on networkx: ``>=3.0``
   :depends on numpy: ``>=1.24.0``
   :depends on openpyxl: ``>=3.1.0``
   :depends on pandas: ``>=1.0.0``
   :depends on plotly: ``>=5.19.0``
   :depends on pysam: ``>=0.21.0``
   :depends on python: ``>=3.9,<3.13``
   :depends on python-kaleido: ``>=0.2.0``
   :depends on rapidfuzz: ``>=3.6.0``
   :depends on ruptures: ``>=1.1.8``
   :depends on scikit-learn: ``>=1.3.0``
   :depends on scipy: ``>=1.10.0``
   :depends on waitress: ``>=2.1.0``
   :depends on wslpath: ``>=0.4.1``

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

    pixi global install dajin2

to add into an existing workspace instead, run::

    pixi add dajin2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dajin2

Alternatively, to install into a new environment, run::

    conda create -n envname dajin2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dajin2:<tag>

(see `dajin2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dajin2| image:: https://img.shields.io/conda/dn/bioconda/dajin2.svg?style=flat
   :target: https://anaconda.org/bioconda/dajin2
   :alt:   (downloads)
.. |docker_dajin2| image:: https://quay.io/repository/biocontainers/dajin2/status
   :target: https://quay.io/repository/biocontainers/dajin2
.. _`dajin2/tags`: https://quay.io/repository/biocontainers/dajin2?tab=tags


.. raw:: html

    <script>
        var package = "dajin2";
        var versions = ["0.9.1","0.9.0","0.8.0","0.7.4","0.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dajin2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dajin2/README.html