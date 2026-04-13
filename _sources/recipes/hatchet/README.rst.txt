:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hatchet'
.. highlight: bash

hatchet
=======

.. conda:recipe:: hatchet
   :replaces_section_title:
   :noindex:

   A package to infer allele and clone\-specific copy\-number aberrations \(CNAs\).

   :homepage: https://github.com/raphael-group/hatchet
   :documentation: https://raphael-group.github.io/hatchet
   
   :license: BSD / BSD-3-Clause
   :recipe: /`hatchet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hatchet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hatchet/meta.yaml>`_

   HATCHet is an algorithm to infer allele and clone\-specific copy\-number
   aberrations \(CNAs\)\, clone proportions\, and whole\-genome duplications
   \(WGD\) for several tumor clones jointly from multiple bulk\-tumor samples
   of the same patient or from a single bulk\-tumor sample.


.. conda:package:: hatchet

   |downloads_hatchet| |docker_hatchet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  </span></summary>
      

      ``2.2.0-0``,  ``2.1.2-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.4.14-0``,  ``0.4.12-1``,  ``0.4.12-0``,  ``0.4.11-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-3``,  ``0.2.9-1``,  ``0.2.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: 
   :depends on biopython: 
   :depends on hmmlearn: 
   :depends on kneed: 
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on matplotlib-base: 
   :depends on mosdepth: 
   :depends on numpy: ``>=1.13,<2``
   :depends on pandas: 
   :depends on picard-slim: 
   :depends on psutil: 
   :depends on pybedtools: 
   :depends on pyomo: 
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on requests: 
   :depends on samtools: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on statsmodels: 
   :depends on tabix: 

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

    pixi global install hatchet

to add into an existing workspace instead, run::

    pixi add hatchet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hatchet

Alternatively, to install into a new environment, run::

    conda create -n envname hatchet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hatchet:<tag>

(see `hatchet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hatchet| image:: https://img.shields.io/conda/dn/bioconda/hatchet.svg?style=flat
   :target: https://anaconda.org/bioconda/hatchet
   :alt:   (downloads)
.. |docker_hatchet| image:: https://quay.io/repository/biocontainers/hatchet/status
   :target: https://quay.io/repository/biocontainers/hatchet
.. _`hatchet/tags`: https://quay.io/repository/biocontainers/hatchet?tab=tags


.. raw:: html

    <script>
        var package = "hatchet";
        var versions = ["2.2.0","2.1.2","2.1.1","2.1.1","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hatchet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hatchet/README.html