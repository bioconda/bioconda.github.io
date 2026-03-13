:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spotyping'
.. highlight: bash

spotyping
=========

.. conda:recipe:: spotyping
   :replaces_section_title:
   :noindex:

   SpoTyping\: fast and accurate in silico Mycobacterium spoligotyping from sequence reads

   :homepage: https://github.com/xiaeryu/SpoTyping
   :license: GPL / GPL-3
   :recipe: /`spotyping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spotyping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spotyping/meta.yaml>`_
   :links: DOI: :DOI:`10.1186/s13073-016-0270-7`

   


.. conda:package:: spotyping

   |downloads_spotyping| |docker_spotyping|

   :versions:
      
      

      ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``

      

   
   :depends on blast: 
   :depends on python: ``<3``
   :depends on r-gdata: 

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

    pixi global install spotyping

to add into an existing workspace instead, run::

    pixi add spotyping

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spotyping

Alternatively, to install into a new environment, run::

    conda create -n envname spotyping

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spotyping:<tag>

(see `spotyping/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spotyping| image:: https://img.shields.io/conda/dn/bioconda/spotyping.svg?style=flat
   :target: https://anaconda.org/bioconda/spotyping
   :alt:   (downloads)
.. |docker_spotyping| image:: https://quay.io/repository/biocontainers/spotyping/status
   :target: https://quay.io/repository/biocontainers/spotyping
.. _`spotyping/tags`: https://quay.io/repository/biocontainers/spotyping?tab=tags


.. raw:: html

    <script>
        var package = "spotyping";
        var versions = ["2.1","2.1","2.1","2.1","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spotyping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spotyping/README.html