:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genochar'
.. highlight: bash

genochar
========

.. conda:recipe:: genochar
   :replaces_section_title:
   :noindex:

   GenoChar\: Genome characterization workflow for generating publication\-ready tables from microbial genome assemblies

   :homepage: https://github.com/ljunwon1114/GenoChar
   :license: MIT
   :recipe: /`genochar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genochar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genochar/meta.yaml>`_

   


.. conda:package:: genochar

   |downloads_genochar| |docker_genochar|

   :versions:
      
      

      ``0.6.3.2-0``

      

   
   :depends on openpyxl: ``>=3.1``
   :depends on pandas: ``>=2.0``
   :depends on python: ``>=3.10``

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

    pixi global install genochar

to add into an existing workspace instead, run::

    pixi add genochar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genochar

Alternatively, to install into a new environment, run::

    conda create -n envname genochar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genochar:<tag>

(see `genochar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genochar| image:: https://img.shields.io/conda/dn/bioconda/genochar.svg?style=flat
   :target: https://anaconda.org/bioconda/genochar
   :alt:   (downloads)
.. |docker_genochar| image:: https://quay.io/repository/biocontainers/genochar/status
   :target: https://quay.io/repository/biocontainers/genochar
.. _`genochar/tags`: https://quay.io/repository/biocontainers/genochar?tab=tags


.. raw:: html

    <script>
        var package = "genochar";
        var versions = ["0.6.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genochar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genochar/README.html