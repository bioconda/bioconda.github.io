:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mokapot'
.. highlight: bash

mokapot
=======

.. conda:recipe:: mokapot
   :replaces_section_title:
   :noindex:

   Fast and flexible semi\-supervised learning for peptide detection

   :homepage: https://github.com/wfondrie/mokapot
   :documentation: https://mokapot.readthedocs.io
   
   :license: APACHE / Apache-2.0
   :recipe: /`mokapot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mokapot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mokapot/meta.yaml>`_

   


.. conda:package:: mokapot

   |downloads_mokapot| |docker_mokapot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-2</code>,  <code>0.8.0-1</code>,  <code>0.8.0-0</code>,  </span></summary>
      

      ``0.10.0-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-2``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on importlib-metadata: ``>=5.1.0``
   :depends on joblib: ``>=1.1.0``
   :depends on lxml: ``>=4.6.2``
   :depends on matplotlib-base: ``>=3.1.3``
   :depends on numba: ``>=0.48.0``
   :depends on numpy: ``>=1.18.1``
   :depends on pandas: ``>=1.0.3``
   :depends on python: ``>=3.6``
   :depends on scikit-learn: ``>=0.22.1``
   :depends on triqler: ``>=0.6.2``

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

    pixi global install mokapot

to add into an existing workspace instead, run::

    pixi add mokapot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mokapot

Alternatively, to install into a new environment, run::

    conda create -n envname mokapot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mokapot:<tag>

(see `mokapot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mokapot| image:: https://img.shields.io/conda/dn/bioconda/mokapot.svg?style=flat
   :target: https://anaconda.org/bioconda/mokapot
   :alt:   (downloads)
.. |docker_mokapot| image:: https://quay.io/repository/biocontainers/mokapot/status
   :target: https://quay.io/repository/biocontainers/mokapot
.. _`mokapot/tags`: https://quay.io/repository/biocontainers/mokapot?tab=tags


.. raw:: html

    <script>
        var package = "mokapot";
        var versions = ["0.10.0","0.9.1","0.9.0","0.8.3","0.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mokapot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mokapot/README.html