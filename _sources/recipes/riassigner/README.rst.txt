:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riassigner'
.. highlight: bash

riassigner
==========

.. conda:recipe:: riassigner
   :replaces_section_title:
   :noindex:

   GC\-MS retention index calculation

   :homepage: https://github.com/RECETOX/RIAssigner
   :license: MIT / MIT
   :recipe: /`riassigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riassigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riassigner/meta.yaml>`_

   RIAssigner is a python tool for retention index \(RI\) computation for GC\-MS data



.. conda:package:: riassigner

   |downloads_riassigner| |docker_riassigner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.4-4</code>,  <code>0.3.4-3</code>,  <code>0.3.4-2</code>,  <code>0.3.4-1</code>,  <code>0.3.4-0</code>,  </span></summary>
      

      ``0.6.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.4-4``,  ``0.3.4-3``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: ``>=8.0``
   :depends on fastparquet: ``>=2025.12.0``
   :depends on matchms: ``>=0.30.1``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pint: ``>=0.25.2``
   :depends on python: ``>=3.11,<3.14``
   :depends on scipy: 
   :depends on urllib3: ``>=2.6.3``

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

    pixi global install riassigner

to add into an existing workspace instead, run::

    pixi add riassigner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install riassigner

Alternatively, to install into a new environment, run::

    conda create -n envname riassigner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/riassigner:<tag>

(see `riassigner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_riassigner| image:: https://img.shields.io/conda/dn/bioconda/riassigner.svg?style=flat
   :target: https://anaconda.org/bioconda/riassigner
   :alt:   (downloads)
.. |docker_riassigner| image:: https://quay.io/repository/biocontainers/riassigner/status
   :target: https://quay.io/repository/biocontainers/riassigner
.. _`riassigner/tags`: https://quay.io/repository/biocontainers/riassigner?tab=tags


.. raw:: html

    <script>
        var package = "riassigner";
        var versions = ["0.6.1","0.5.0","0.4.1","0.4.0","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riassigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riassigner/README.html