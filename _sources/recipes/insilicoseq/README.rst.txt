:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'insilicoseq'
.. highlight: bash

insilicoseq
===========

.. conda:recipe:: insilicoseq
   :replaces_section_title:
   :noindex:

   A sequencing simulator.

   :homepage: https://github.com/HadrienG/InSilicoSeq
   :documentation: https://insilicoseq.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`insilicoseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/insilicoseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/insilicoseq/meta.yaml>`_

   


.. conda:package:: insilicoseq

   |downloads_insilicoseq| |docker_insilicoseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.6.0-0</code>,  <code>1.5.4-1</code>,  <code>1.5.4-0</code>,  <code>1.5.3-1</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  </span></summary>
      

      ``2.0.1-0``,  ``2.0.0-0``,  ``1.6.0-0``,  ``1.5.4-1``,  ``1.5.4-0``,  ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.6-1``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-1``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.3.6-1``,  ``1.3.5-1``,  ``1.3.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.79``
   :depends on future: 
   :depends on joblib: 
   :depends on numpy: 
   :depends on pysam: ``>=0.15.1``
   :depends on python: 
   :depends on requests: 
   :depends on scipy: 

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

    pixi global install insilicoseq

to add into an existing workspace instead, run::

    pixi add insilicoseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install insilicoseq

Alternatively, to install into a new environment, run::

    conda create -n envname insilicoseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/insilicoseq:<tag>

(see `insilicoseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_insilicoseq| image:: https://img.shields.io/conda/dn/bioconda/insilicoseq.svg?style=flat
   :target: https://anaconda.org/bioconda/insilicoseq
   :alt:   (downloads)
.. |docker_insilicoseq| image:: https://quay.io/repository/biocontainers/insilicoseq/status
   :target: https://quay.io/repository/biocontainers/insilicoseq
.. _`insilicoseq/tags`: https://quay.io/repository/biocontainers/insilicoseq?tab=tags


.. raw:: html

    <script>
        var package = "insilicoseq";
        var versions = ["2.0.1","2.0.0","1.6.0","1.5.4","1.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/insilicoseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/insilicoseq/README.html