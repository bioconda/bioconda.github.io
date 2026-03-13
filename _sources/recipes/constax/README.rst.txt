:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'constax'
.. highlight: bash

constax
=======

.. conda:recipe:: constax
   :replaces_section_title:
   :noindex:

   A software for accurate taxonomic classification of environmental DNA markers

   :homepage: https://github.com/liberjul/CONSTAXv2
   :documentation: https://constax.readthedocs.io/en/latest/
   
   :license: MIT
   :recipe: /`constax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/constax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/constax/meta.yaml>`_

   


.. conda:package:: constax

   |downloads_constax| |docker_constax|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.20-0</code>,  <code>2.0.19-0</code>,  <code>2.0.18-0</code>,  <code>2.0.17-0</code>,  <code>2.0.16-0</code>,  <code>2.0.15-0</code>,  <code>2.0.14-0</code>,  <code>2.0.13-0</code>,  <code>2.0.12-0</code>,  </span></summary>
      

      ``2.0.20-0``,  ``2.0.19-0``,  ``2.0.18-0``,  ``2.0.17-0``,  ``2.0.16-0``,  ``2.0.15-0``,  ``2.0.14-0``,  ``2.0.13-0``,  ``2.0.12-0``,  ``2.0.11-0``,  ``2.0.10-0``,  ``2.0.9-0``,  ``2.0.8-1``,  ``2.0.8-0``,  ``2.0.7-2``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-1``,  ``2.0.5-0``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.1-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.6``
   :depends on rdptools: 
   :depends on vsearch: 

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

    pixi global install constax

to add into an existing workspace instead, run::

    pixi add constax

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install constax

Alternatively, to install into a new environment, run::

    conda create -n envname constax

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/constax:<tag>

(see `constax/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_constax| image:: https://img.shields.io/conda/dn/bioconda/constax.svg?style=flat
   :target: https://anaconda.org/bioconda/constax
   :alt:   (downloads)
.. |docker_constax| image:: https://quay.io/repository/biocontainers/constax/status
   :target: https://quay.io/repository/biocontainers/constax
.. _`constax/tags`: https://quay.io/repository/biocontainers/constax?tab=tags


.. raw:: html

    <script>
        var package = "constax";
        var versions = ["2.0.20","2.0.19","2.0.18","2.0.17","2.0.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/constax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/constax/README.html