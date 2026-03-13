:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbio_monitor'
.. highlight: bash

bcbio_monitor
=============

.. conda:recipe:: bcbio_monitor
   :replaces_section_title:
   :noindex:

   bcbio\-monitor is an extension of bcbio\-nextgen to visualize its progress

   :homepage: https://github.com/guillermo-carrasco/bcbio-nextgen-monitor
   :license: MIT
   :recipe: /`bcbio_monitor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio_monitor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio_monitor/meta.yaml>`_

   


.. conda:package:: bcbio_monitor

   |downloads_bcbio_monitor| |docker_bcbio_monitor|

   :versions:
      
      

      ``1.0.6-4``,  ``1.0.6-3``,  ``1.0.6-2``,  ``1.0.6-0``,  ``1.0.2-0``

      

   
   :depends on dateutil: 
   :depends on flask: ``>=0.10.1``
   :depends on gevent: ``>=1.0,<1.2``
   :depends on paramiko: 
   :depends on python: ``<3``
   :depends on python-graphviz: 
   :depends on pytz: 
   :depends on pyyaml: 
   :depends on requests: 

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

    pixi global install bcbio_monitor

to add into an existing workspace instead, run::

    pixi add bcbio_monitor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bcbio_monitor

Alternatively, to install into a new environment, run::

    conda create -n envname bcbio_monitor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bcbio_monitor:<tag>

(see `bcbio_monitor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bcbio_monitor| image:: https://img.shields.io/conda/dn/bioconda/bcbio_monitor.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbio_monitor
   :alt:   (downloads)
.. |docker_bcbio_monitor| image:: https://quay.io/repository/biocontainers/bcbio_monitor/status
   :target: https://quay.io/repository/biocontainers/bcbio_monitor
.. _`bcbio_monitor/tags`: https://quay.io/repository/biocontainers/bcbio_monitor?tab=tags


.. raw:: html

    <script>
        var package = "bcbio_monitor";
        var versions = ["1.0.6","1.0.6","1.0.6","1.0.6","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio_monitor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio_monitor/README.html