:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pdfkit'
.. highlight: bash

pdfkit
======

.. conda:recipe:: pdfkit
   :replaces_section_title:
   :noindex:

   Wkhtmltopdf python wrapper to convert html to pdf using the webkit rendering engine and qt

   :homepage: https://pypi.python.org/pypi/pdfkit
   :license: MIT License
   :recipe: /`pdfkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdfkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdfkit/meta.yaml>`_

   


.. conda:package:: pdfkit

   |downloads_pdfkit| |docker_pdfkit|

   :versions:
      
      

      ``0.6.1-0``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on wkhtmltopdf: 

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

    pixi global install pdfkit

to add into an existing workspace instead, run::

    pixi add pdfkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pdfkit

Alternatively, to install into a new environment, run::

    conda create -n envname pdfkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pdfkit:<tag>

(see `pdfkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pdfkit| image:: https://img.shields.io/conda/dn/bioconda/pdfkit.svg?style=flat
   :target: https://anaconda.org/bioconda/pdfkit
   :alt:   (downloads)
.. |docker_pdfkit| image:: https://quay.io/repository/biocontainers/pdfkit/status
   :target: https://quay.io/repository/biocontainers/pdfkit
.. _`pdfkit/tags`: https://quay.io/repository/biocontainers/pdfkit?tab=tags


.. raw:: html

    <script>
        var package = "pdfkit";
        var versions = ["0.6.1","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pdfkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pdfkit/README.html