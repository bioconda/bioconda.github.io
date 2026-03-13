:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'changeo'
.. highlight: bash

changeo
=======

.. conda:recipe:: changeo
   :replaces_section_title:
   :noindex:

   A bioinformatics toolkit for processing high\-throughput lymphocyte receptor sequencing data.

   :homepage: https://github.com/immcantation/changeo
   :documentation: https://changeo.readthedocs.io
   
   :license: AGPL / AGPL-3.0-only
   :recipe: /`changeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/changeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/changeo/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv359`

   


.. conda:package:: changeo

   |downloads_changeo| |docker_changeo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on airr: ``>=1.3.1``
   :depends on biopython: ``>=1.81``
   :depends on importlib-resources: ``>=6.4.0``
   :depends on numpy: ``>=1.23.2``
   :depends on packaging: ``>=21.3``
   :depends on packaging: ``>=23.2``
   :depends on pandas: ``>=1.5.0``
   :depends on presto: ``>=0.7.1``
   :depends on python: ``>=3.10``
   :depends on pyyaml: ``>=6.0``
   :depends on scipy: ``>=1.9.3``
   :depends on setuptools: 

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

    pixi global install changeo

to add into an existing workspace instead, run::

    pixi add changeo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install changeo

Alternatively, to install into a new environment, run::

    conda create -n envname changeo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/changeo:<tag>

(see `changeo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_changeo| image:: https://img.shields.io/conda/dn/bioconda/changeo.svg?style=flat
   :target: https://anaconda.org/bioconda/changeo
   :alt:   (downloads)
.. |docker_changeo| image:: https://quay.io/repository/biocontainers/changeo/status
   :target: https://quay.io/repository/biocontainers/changeo
.. _`changeo/tags`: https://quay.io/repository/biocontainers/changeo?tab=tags


.. raw:: html

    <script>
        var package = "changeo";
        var versions = ["1.3.4","1.3.3","1.3.1","1.3.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/changeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/changeo/README.html