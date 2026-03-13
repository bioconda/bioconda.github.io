:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'straglr'
.. highlight: bash

straglr
=======

.. conda:recipe:: straglr
   :replaces_section_title:
   :noindex:

   Short\-tandem repeat genotyping using long reads 

   :homepage: https://github.com/bcgsc/straglr
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`straglr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/straglr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/straglr/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-021-02447-3`

   


.. conda:package:: straglr

   |downloads_straglr| |docker_straglr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.6-0</code>,  <code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: 
   :depends on intspan: ``>=1.5.8``
   :depends on numpy: ``>=1.22.3``
   :depends on pathos: ``>=0.2.3``
   :depends on pybedtools: ``>=0.9.0``
   :depends on pysam: ``>=0.14.0``
   :depends on python: ``>=3.7``
   :depends on scikit-learn: ``>=1.1``
   :depends on scipy: ``>=1.8.0``
   :depends on trf: 

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

    pixi global install straglr

to add into an existing workspace instead, run::

    pixi add straglr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install straglr

Alternatively, to install into a new environment, run::

    conda create -n envname straglr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/straglr:<tag>

(see `straglr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_straglr| image:: https://img.shields.io/conda/dn/bioconda/straglr.svg?style=flat
   :target: https://anaconda.org/bioconda/straglr
   :alt:   (downloads)
.. |docker_straglr| image:: https://quay.io/repository/biocontainers/straglr/status
   :target: https://quay.io/repository/biocontainers/straglr
.. _`straglr/tags`: https://quay.io/repository/biocontainers/straglr?tab=tags


.. raw:: html

    <script>
        var package = "straglr";
        var versions = ["1.5.6","1.5.5","1.5.4","1.5.3","1.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/straglr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/straglr/README.html