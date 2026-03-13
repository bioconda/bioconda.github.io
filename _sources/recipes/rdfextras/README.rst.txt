:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdfextras'
.. highlight: bash

rdfextras
=========

.. conda:recipe:: rdfextras
   :replaces_section_title:
   :noindex:

   RDFExtras provide tools\, extra stores and such for RDFLib.

   :homepage: http://github.com/RDFLib/rdfextras
   :license: BSD / BSD License
   :recipe: /`rdfextras <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdfextras>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdfextras/meta.yaml>`_

   


.. conda:package:: rdfextras

   |downloads_rdfextras| |docker_rdfextras|

   :versions:
      
      

      ``0.4-3``,  ``0.4-2``,  ``0.4-0``

      

   
   :depends on isodate: 
   :depends on pyparsing: ``<=1.5.7``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on rdflib: ``>=3.2.1``

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

    pixi global install rdfextras

to add into an existing workspace instead, run::

    pixi add rdfextras

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rdfextras

Alternatively, to install into a new environment, run::

    conda create -n envname rdfextras

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rdfextras:<tag>

(see `rdfextras/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rdfextras| image:: https://img.shields.io/conda/dn/bioconda/rdfextras.svg?style=flat
   :target: https://anaconda.org/bioconda/rdfextras
   :alt:   (downloads)
.. |docker_rdfextras| image:: https://quay.io/repository/biocontainers/rdfextras/status
   :target: https://quay.io/repository/biocontainers/rdfextras
.. _`rdfextras/tags`: https://quay.io/repository/biocontainers/rdfextras?tab=tags


.. raw:: html

    <script>
        var package = "rdfextras";
        var versions = ["0.4","0.4","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdfextras/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdfextras/README.html