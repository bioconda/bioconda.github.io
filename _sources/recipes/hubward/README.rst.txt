:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hubward'
.. highlight: bash

hubward
=======

.. conda:recipe:: hubward
   :replaces_section_title:
   :noindex:

   Manage the visualization of large amounts of other people\'s \[often messy\] genomics data

   :homepage: https://github.com/daler/hubward
   :license: BSD License
   :recipe: /`hubward <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hubward>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hubward/meta.yaml>`_

   


.. conda:package:: hubward

   |downloads_hubward| |docker_hubward|

   :versions:
      
      

      ``0.2.2-1``,  ``0.2.1-1``,  ``0.2.0-0``

      

   
   :depends on argh: 
   :depends on bleach: 
   :depends on colorama: 
   :depends on docutils: 
   :depends on fabric: 
   :depends on functools32: 
   :depends on jsonschema: 
   :depends on matplotlib: 
   :depends on numpy: 
   :depends on pyaml: 
   :depends on pybedtools: 
   :depends on pycurl: 
   :depends on python: ``2.7*``
   :depends on pyyaml: 
   :depends on trackhub: 

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

    pixi global install hubward

to add into an existing workspace instead, run::

    pixi add hubward

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hubward

Alternatively, to install into a new environment, run::

    conda create -n envname hubward

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hubward:<tag>

(see `hubward/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hubward| image:: https://img.shields.io/conda/dn/bioconda/hubward.svg?style=flat
   :target: https://anaconda.org/bioconda/hubward
   :alt:   (downloads)
.. |docker_hubward| image:: https://quay.io/repository/biocontainers/hubward/status
   :target: https://quay.io/repository/biocontainers/hubward
.. _`hubward/tags`: https://quay.io/repository/biocontainers/hubward?tab=tags


.. raw:: html

    <script>
        var package = "hubward";
        var versions = ["0.2.2","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hubward/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hubward/README.html