:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'submission-excel2xml'
.. highlight: bash

submission-excel2xml
====================

.. conda:recipe:: submission-excel2xml
   :replaces_section_title:
   :noindex:

   Generate DRA metadata XML files from Excel spreadsheet

   :homepage: https://github.com/ddbj/submission-excel2xml
   :license: Apache License 2.0
   :recipe: /`submission-excel2xml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/submission-excel2xml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/submission-excel2xml/meta.yaml>`_

   


.. conda:package:: submission-excel2xml

   |downloads_submission-excel2xml| |docker_submission-excel2xml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6.2-0</code>,  <code>3.6-0</code>,  <code>3.5-0</code>,  <code>3.4-0</code>,  <code>3.3-0</code>,  <code>3.2-0</code>,  <code>3.1-0</code>,  <code>3.0-0</code>,  <code>2.9.1-0</code>,  </span></summary>
      

      ``3.6.2-0``,  ``3.6-0``,  ``3.5-0``,  ``3.4-0``,  ``3.3-0``,  ``3.2-0``,  ``3.1-0``,  ``3.0-0``,  ``2.9.1-0``,  ``2.9-0``,  ``2.8.1-0``,  ``2.8-0``,  ``2.6-0``,  ``2.5-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libxml2: 
   :depends on ruby: ``>=3.0``

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

    pixi global install submission-excel2xml

to add into an existing workspace instead, run::

    pixi add submission-excel2xml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install submission-excel2xml

Alternatively, to install into a new environment, run::

    conda create -n envname submission-excel2xml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/submission-excel2xml:<tag>

(see `submission-excel2xml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_submission-excel2xml| image:: https://img.shields.io/conda/dn/bioconda/submission-excel2xml.svg?style=flat
   :target: https://anaconda.org/bioconda/submission-excel2xml
   :alt:   (downloads)
.. |docker_submission-excel2xml| image:: https://quay.io/repository/biocontainers/submission-excel2xml/status
   :target: https://quay.io/repository/biocontainers/submission-excel2xml
.. _`submission-excel2xml/tags`: https://quay.io/repository/biocontainers/submission-excel2xml?tab=tags


.. raw:: html

    <script>
        var package = "submission-excel2xml";
        var versions = ["3.6.2","3.6","3.5","3.4","3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/submission-excel2xml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/submission-excel2xml/README.html