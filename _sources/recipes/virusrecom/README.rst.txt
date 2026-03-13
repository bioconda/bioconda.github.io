:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virusrecom'
.. highlight: bash

virusrecom
==========

.. conda:recipe:: virusrecom
   :replaces_section_title:
   :noindex:

   An information\-theory\-based method for recombination detection of viral lineages.

   :homepage: https://github.com/ZhijianZhou01/virusrecom
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`virusrecom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virusrecom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virusrecom/meta.yaml>`_
   :links: doi: :doi:`10.1093/bib/bbac513`

   


.. conda:package:: virusrecom

   |downloads_virusrecom| |docker_virusrecom|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-0</code>,  <code>1.3.7-1</code>,  <code>1.3.7-0</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.4.0-0``,  ``1.3.7-1``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.7-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3.1-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.19.3``
   :depends on openpyxl: ``>=3.0.5``
   :depends on pandas: ``>=1.1.5``
   :depends on psutil: ``>=5.9.1``
   :depends on python: ``>=3.5,!=3.8``
   :depends on scipy: ``>=1.5.4``

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

    pixi global install virusrecom

to add into an existing workspace instead, run::

    pixi add virusrecom

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install virusrecom

Alternatively, to install into a new environment, run::

    conda create -n envname virusrecom

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/virusrecom:<tag>

(see `virusrecom/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_virusrecom| image:: https://img.shields.io/conda/dn/bioconda/virusrecom.svg?style=flat
   :target: https://anaconda.org/bioconda/virusrecom
   :alt:   (downloads)
.. |docker_virusrecom| image:: https://quay.io/repository/biocontainers/virusrecom/status
   :target: https://quay.io/repository/biocontainers/virusrecom
.. _`virusrecom/tags`: https://quay.io/repository/biocontainers/virusrecom?tab=tags


.. raw:: html

    <script>
        var package = "virusrecom";
        var versions = ["1.4.0","1.3.7","1.3.7","1.3.6","1.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virusrecom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virusrecom/README.html