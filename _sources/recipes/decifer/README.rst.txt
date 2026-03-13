:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'decifer'
.. highlight: bash

decifer
=======

.. conda:recipe:: decifer
   :replaces_section_title:
   :noindex:

   DeCiFer simultaneously selects mutation multiplicities and clusters SNVs by their corresponding descendant cell fractions \(DCF\).

   :homepage: https://github.com/raphael-group/decifer
   :license: BSD / BSD-3-Clause
   :recipe: /`decifer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decifer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decifer/meta.yaml>`_

   DeCiFer is an algorithm that simultaneously selects mutation multiplicities and clusters SNVs by their corresponding descendant cell fractions \(DCF\)\, a statistic that quantifies the proportion of cells which acquired the SNV or whose ancestors acquired the SNV. DCF is related to the commonly used cancer cell fraction \(CCF\) but further accounts for SNVs which are lost due to deleterious somatic copy\-number aberrations \(CNAs\)\, identifying clusters of SNVs which occur in the same phylogenetic branch of tumour evolution.



.. conda:package:: decifer

   |downloads_decifer| |docker_decifer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.4-4</code>,  <code>2.1.4-3</code>,  <code>2.1.4-2</code>,  <code>2.1.4-1</code>,  <code>2.1.4-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-1</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  </span></summary>
      

      ``2.1.4-4``,  ``2.1.4-3``,  ``2.1.4-2``,  ``2.1.4-1``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.5-1``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1-0``,  ``1.0.0-0``,  ``0.0.2-1``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on lemon: ``>=1.3.1,<1.3.2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on numpy: ``>=1.16.1``
   :depends on pandas: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: ``>=1.2.1``
   :depends on seaborn-base: ``>=0.7.1``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install decifer

to add into an existing workspace instead, run::

    pixi add decifer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install decifer

Alternatively, to install into a new environment, run::

    conda create -n envname decifer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/decifer:<tag>

(see `decifer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_decifer| image:: https://img.shields.io/conda/dn/bioconda/decifer.svg?style=flat
   :target: https://anaconda.org/bioconda/decifer
   :alt:   (downloads)
.. |docker_decifer| image:: https://quay.io/repository/biocontainers/decifer/status
   :target: https://quay.io/repository/biocontainers/decifer
.. _`decifer/tags`: https://quay.io/repository/biocontainers/decifer?tab=tags


.. raw:: html

    <script>
        var package = "decifer";
        var versions = ["2.1.4","2.1.4","2.1.4","2.1.4","2.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/decifer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/decifer/README.html