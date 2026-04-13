:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymvpa'
.. highlight: bash

pymvpa
======

.. conda:recipe:: pymvpa
   :replaces_section_title:
   :noindex:

   PyMVPA \-\- Multivariate Pattern Analysis in Python

   :homepage: http://www.pymvpa.org/
   :developer docs: https://github.com/PyMVPA/PyMVPA
   :license: perl_5
   :recipe: /`pymvpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymvpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymvpa/meta.yaml>`_

   


.. conda:package:: pymvpa

   |downloads_pymvpa| |docker_pymvpa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.5-8</code>,  <code>2.6.5-6</code>,  <code>2.6.5-5</code>,  <code>2.6.5-4</code>,  <code>2.6.5-3</code>,  <code>2.6.5-2</code>,  <code>2.6.5-1</code>,  <code>2.6.5-0</code>,  <code>2.6.4-0</code>,  </span></summary>
      

      ``2.6.5-8``,  ``2.6.5-6``,  ``2.6.5-5``,  ``2.6.5-4``,  ``2.6.5-3``,  ``2.6.5-2``,  ``2.6.5-1``,  ``2.6.5-0``,  ``2.6.4-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libsvm: ``>=3.21,<4.0a0``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on matplotlib: 
   :depends on numpy: ``>=1.21.6,<2.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: 
   :depends on swig: 
   :depends on zlib: 

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

    pixi global install pymvpa

to add into an existing workspace instead, run::

    pixi add pymvpa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pymvpa

Alternatively, to install into a new environment, run::

    conda create -n envname pymvpa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pymvpa:<tag>

(see `pymvpa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pymvpa| image:: https://img.shields.io/conda/dn/bioconda/pymvpa.svg?style=flat
   :target: https://anaconda.org/bioconda/pymvpa
   :alt:   (downloads)
.. |docker_pymvpa| image:: https://quay.io/repository/biocontainers/pymvpa/status
   :target: https://quay.io/repository/biocontainers/pymvpa
.. _`pymvpa/tags`: https://quay.io/repository/biocontainers/pymvpa?tab=tags


.. raw:: html

    <script>
        var package = "pymvpa";
        var versions = ["2.6.5","2.6.5","2.6.5","2.6.5","2.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymvpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymvpa/README.html