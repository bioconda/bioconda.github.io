:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ampcombi'
.. highlight: bash

ampcombi
========

.. conda:recipe:: ampcombi
   :replaces_section_title:
   :noindex:

   A parsing tool to convert and summarise the outputs from multiple AMP detection tools.

   :homepage: https://github.com/Darcy220606/AMPcombi
   :developer docs: https://github.com/Darcy220606/AMPcombi/tree/dev
   :license: MIT / MIT
   :recipe: /`ampcombi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampcombi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampcombi/meta.yaml>`_

   


.. conda:package:: ampcombi

   |downloads_ampcombi| |docker_ampcombi|

   :versions:
      
      

      ``2.0.1-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends on backports.tempfile: 
   :depends on biopython: ``1.80``
   :depends on colorama: ``0.4.6``
   :depends on contextlib2: 
   :depends on jsonschema: 
   :depends on mmseqs2: ``15.6f452``
   :depends on numpy: ``1.26.4``
   :depends on openpyxl: 
   :depends on pandas: ``1.5.2``
   :depends on parsedatetime: 
   :depends on python: ``3.11``
   :depends on requests: 
   :depends on subprocess32: 

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

    pixi global install ampcombi

to add into an existing workspace instead, run::

    pixi add ampcombi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ampcombi

Alternatively, to install into a new environment, run::

    conda create -n envname ampcombi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ampcombi:<tag>

(see `ampcombi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ampcombi| image:: https://img.shields.io/conda/dn/bioconda/ampcombi.svg?style=flat
   :target: https://anaconda.org/bioconda/ampcombi
   :alt:   (downloads)
.. |docker_ampcombi| image:: https://quay.io/repository/biocontainers/ampcombi/status
   :target: https://quay.io/repository/biocontainers/ampcombi
.. _`ampcombi/tags`: https://quay.io/repository/biocontainers/ampcombi?tab=tags


.. raw:: html

    <script>
        var package = "ampcombi";
        var versions = ["2.0.1","0.2.2","0.2.1","0.2.0","0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ampcombi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ampcombi/README.html