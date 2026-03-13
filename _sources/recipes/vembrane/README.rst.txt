:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vembrane'
.. highlight: bash

vembrane
========

.. conda:recipe:: vembrane
   :replaces_section_title:
   :noindex:

   Filter VCF\/BCF files with Python expressions.

   :homepage: https://github.com/vembrane/vembrane
   :license: MIT / MIT
   :recipe: /`vembrane <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vembrane>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vembrane/meta.yaml>`_

   


.. conda:package:: vembrane

   |downloads_vembrane| |docker_vembrane|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.0-0</code>,  <code>2.4.0-0</code>,  <code>2.3.4-0</code>,  <code>2.3.3-0</code>,  <code>2.2.0-0</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.0-0</code>,  <code>1.0.7-0</code>,  </span></summary>
      

      ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.2.0-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.14.0-0``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on asttokens: ``>=3.0,<4``
   :depends on cyvcf2: ``>=0.31.1,<0.32``
   :depends on intervaltree: ``>=3.1,<4``
   :depends on networkx: ``>=3.5,<4``
   :depends on numpy: ``>=2.1,<3.0``
   :depends on obonet: ``>=1.1.1,<2``
   :depends on pyarrow: ``>=22.0.0``
   :depends on pysam: ``>=0.23.3,<0.25``
   :depends on python: ``>=3.12``
   :depends on pyyaml: ``>=6.0,<7``
   :depends on typing-extensions: ``>=4.12.2,<5``
   :depends on yte: ``>=1.9,<2``

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

    pixi global install vembrane

to add into an existing workspace instead, run::

    pixi add vembrane

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vembrane

Alternatively, to install into a new environment, run::

    conda create -n envname vembrane

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vembrane:<tag>

(see `vembrane/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vembrane| image:: https://img.shields.io/conda/dn/bioconda/vembrane.svg?style=flat
   :target: https://anaconda.org/bioconda/vembrane
   :alt:   (downloads)
.. |docker_vembrane| image:: https://quay.io/repository/biocontainers/vembrane/status
   :target: https://quay.io/repository/biocontainers/vembrane
.. _`vembrane/tags`: https://quay.io/repository/biocontainers/vembrane?tab=tags


.. raw:: html

    <script>
        var package = "vembrane";
        var versions = ["2.5.0","2.4.0","2.3.4","2.3.3","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vembrane/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vembrane/README.html