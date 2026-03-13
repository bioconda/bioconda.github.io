:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metanovo'
.. highlight: bash

metanovo
========

.. conda:recipe:: metanovo
   :replaces_section_title:
   :noindex:

   Produce targeted databases for mass spectrometry analysis.

   :homepage: https://github.com/uct-cbio/proteomics-pipelines
   :license: MIT / MIT
   :recipe: /`metanovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metanovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metanovo/meta.yaml>`_

   


.. conda:package:: metanovo

   |downloads_metanovo| |docker_metanovo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.4-10</code>,  <code>1.9.4-9</code>,  <code>1.9.4-8</code>,  <code>1.9.4-7</code>,  <code>1.9.4-6</code>,  <code>1.9.4-5</code>,  <code>1.9.4-4</code>,  <code>1.9.4-3</code>,  <code>1.9.4-2</code>,  </span></summary>
      

      ``1.9.4-10``,  ``1.9.4-9``,  ``1.9.4-8``,  ``1.9.4-7``,  ``1.9.4-6``,  ``1.9.4-5``,  ``1.9.4-4``,  ``1.9.4-3``,  ``1.9.4-2``,  ``1.9.4-1``,  ``1.9.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bc: ``>=1.07.1``
   :depends on biopython: ``1.79``
   :depends on numpy: ``1.22.1``
   :depends on openjdk: ``8.0.312.*``
   :depends on pandas: ``1.3.5``
   :depends on parallel: ``>=20240122``
   :depends on python: ``3.9.9.*``

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

    pixi global install metanovo

to add into an existing workspace instead, run::

    pixi add metanovo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metanovo

Alternatively, to install into a new environment, run::

    conda create -n envname metanovo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metanovo:<tag>

(see `metanovo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metanovo| image:: https://img.shields.io/conda/dn/bioconda/metanovo.svg?style=flat
   :target: https://anaconda.org/bioconda/metanovo
   :alt:   (downloads)
.. |docker_metanovo| image:: https://quay.io/repository/biocontainers/metanovo/status
   :target: https://quay.io/repository/biocontainers/metanovo
.. _`metanovo/tags`: https://quay.io/repository/biocontainers/metanovo?tab=tags


.. raw:: html

    <script>
        var package = "metanovo";
        var versions = ["1.9.4","1.9.4","1.9.4","1.9.4","1.9.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metanovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metanovo/README.html