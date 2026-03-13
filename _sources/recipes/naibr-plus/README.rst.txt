:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'naibr-plus'
.. highlight: bash

naibr-plus
==========

.. conda:recipe:: naibr-plus
   :replaces_section_title:
   :noindex:

   Identify novel adjacencies created by structural variations using linked\-read data

   :homepage: https://github.com/pontushojer/NAIBR
   :license: MIT
   :recipe: /`naibr-plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/naibr-plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/naibr-plus/meta.yaml>`_

   


.. conda:package:: naibr-plus

   |downloads_naibr-plus| |docker_naibr-plus|

   :versions:
      
      

      ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5-0``

      

   
   :depends on matplotlib-base: 
   :depends on mpmath: 
   :depends on numpy: 
   :depends on pysam: ``>=0.15.0``
   :depends on python: ``>=3.7``
   :depends on scipy: 

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

    pixi global install naibr-plus

to add into an existing workspace instead, run::

    pixi add naibr-plus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install naibr-plus

Alternatively, to install into a new environment, run::

    conda create -n envname naibr-plus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/naibr-plus:<tag>

(see `naibr-plus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_naibr-plus| image:: https://img.shields.io/conda/dn/bioconda/naibr-plus.svg?style=flat
   :target: https://anaconda.org/bioconda/naibr-plus
   :alt:   (downloads)
.. |docker_naibr-plus| image:: https://quay.io/repository/biocontainers/naibr-plus/status
   :target: https://quay.io/repository/biocontainers/naibr-plus
.. _`naibr-plus/tags`: https://quay.io/repository/biocontainers/naibr-plus?tab=tags


.. raw:: html

    <script>
        var package = "naibr-plus";
        var versions = ["0.5.3","0.5.2","0.5.1","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/naibr-plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/naibr-plus/README.html